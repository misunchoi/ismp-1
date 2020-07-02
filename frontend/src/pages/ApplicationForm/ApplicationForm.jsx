import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Container,
  Form,
  Grid,
  Input,
  Segment,
  Select,
  Step,
  Label,
  Message
} from 'semantic-ui-react';

import { List, ListItem, SubTitle, Title } from './ApplicationForm.styles';
import './ApplicationForm.css';

import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsModal from './TermsModal';
import CodeOfConductModal from './CodeOfConductModal';

import Section from '../../layout/Section';

import { requests } from 'utils/agent';

import {
  appFormStep,
  getGenderOptions,
  getGradeLevelOptions,
  getReferralOptions,
  getTopicsOptions
} from './ApplicationOptions';

import { useTranslation } from 'react-i18next';
import PageContainer from 'layout/PageContainer';
import {
  logApplicationCompletion,
  logApplicationProgress,
  logApplicationView
} from "utils/google_tag_manager_helpers";

// change to true to prefill the form with valid inputs and debug easier
// THIS SHOULD BE FALSE WHEN MERGING CODE
const DEBUG = false;

const DEBUG_FORM_STATE = {
  first_name: 'Debug',
  last_name: 'User',
  preferred_name: 'Deb',
  gender: 'M',
  birth_year: '1992',
  country_of_origin: 'USA',
  email: 'test@gmail.com',
  grade_level: 'undergraduate',
  school_name: 'UCSD',
  school_city: 'La Jolla',
  school_state: 'California',
  school_country: 'USA',
  destination_school: 'UCSD',
  major: 'Computer Science',
  referral: 'friend',
  additional_input: 'when can I get mentored?'
};

const useApplicationForm = () => {
  let defaultState = {
    first_name: '',
    last_name: '',
    preferred_name: '',
    gender: '',
    birth_year: '',
    country_of_origin: '',
    email: '',
    grade_level: '',
    school_name: '',
    school_city: '',
    school_state: '',
    school_country: '',
    destination_school: '',
    major: '',
    referral: '',
    additional_input: '',
    other_referral: '',
    other_topic: ''
  };

  if (DEBUG) defaultState = DEBUG_FORM_STATE;

  // Set defaults
  const [inputs, setInputs] = useState(defaultState);

  const handleInputChange = (_, data) => {
    if (DEBUG) console.log(_, data);

    let value = data.value;

    if (data.checked !== undefined) {
      // workaround because checkboxes don't have "value"
      value = data.checked ? 'checked' : '';
    }

    setInputs(inputs => ({
      ...inputs,
      [data.name]: value
    }));
  };
  return {
    handleInputChange,
    inputs
  };
};

const useApplicationFormFeedback = t => {
  const [feedbacks, setFeedbacks] = useState({});

  const handleFeedbackChange = (fieldName, feedback) => {
    setFeedbacks(feedbacks => ({
      ...feedbacks,
      [fieldName]: feedback
    }));
  };

  const checkValid = () => {
    return Object.values(feedbacks).every(feedback => !feedback);
  };

  return {
    checkValid,
    handleFeedbackChange,
    feedbacks
  };
};

const useStepFlow = (history, validateStep, signup, t) => {
  // Step Application
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = appFormStep.length;
  const [nextButtonLabel, setNextButtonLabel] = useState(
    t('step.buttons.next')
  );

  useEffect(() => {
    currentStep === 3
      ? setNextButtonLabel(t('step.buttons.submit'))
      : setNextButtonLabel(t('step.buttons.next'));
  }, [currentStep]);

  const stepClick = action => {
    if (action === 'prev' && currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else if (
      action === 'next' &&
      currentStep < totalSteps &&
      validateStep(currentStep)
    ) {
      logApplicationProgress(currentStep);
      setCurrentStep(currentStep + 1);
    } else if (
      action === 'next' &&
      currentStep === 3 &&
      validateStep(currentStep)
    ) {
      signup().then(result => {
        if (result) {
          history.push('/apply-success');
        }
      });
    }
  };

  return {
    stepClick,
    nextButtonLabel,
    currentStep
  };
};

const ApplicationFormValidator = (handleFeedbackChange, inputs, t) => {
  const validations = {
    validateNotBlank: (fieldName, value) => {
      if (!value) {
        handleFeedbackChange(fieldName, t('validations.cannot_be_blank'));
        return false;
      } else {
        handleFeedbackChange(fieldName, '');
        return true;
      }
    },
    validateEmail: (fieldName, value) => {
      /* eslint-disable no-control-regex*/
      const re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

      if (!re.test(value)) {
        handleFeedbackChange(fieldName, t('validations.invalid_email'));
        return false;
      } else {
        handleFeedbackChange(fieldName, '');
        return true;
      }
    },
    validateYear: (fieldName, value) => {
      const re = /^[12]\d{3}$/;

      if (!re.test(value)) {
        handleFeedbackChange(fieldName, t('validations.invalid_year'));
        return false;
      } else {
        handleFeedbackChange(fieldName, '');
        return true;
      }
    },
    validateTermsChecked: (fieldName, value) => {
      if (value !== 'checked') {
        handleFeedbackChange(fieldName, t('validations.check_terms'));
        return false;
      } else {
        handleFeedbackChange(fieldName, '');
        return true;
      }
    },
    validateCodeOfConductChecked: (fieldName, value) => {
      if (value !== 'checked') {
        handleFeedbackChange(fieldName, t('validations.check_code'));
        return false;
      } else {
        handleFeedbackChange(fieldName, '');
        return true;
      }
    }
  };

  const fieldValidations = {
    first_name: [validations.validateNotBlank],
    last_name: [validations.validateNotBlank],
    preferred_name: [],
    birth_year: [validations.validateNotBlank, validations.validateYear],
    gender: [validations.validateNotBlank],
    country_of_origin: [validations.validateNotBlank],
    email: [validations.validateNotBlank, validations.validateEmail],
    grade_level: [validations.validateNotBlank],
    school_name: [validations.validateNotBlank],
    school_city: [validations.validateNotBlank],
    school_state: [],
    school_country: [validations.validateNotBlank],
    major: [validations.validateNotBlank],
    referral: [validations.validateNotBlank],
    additional_comments: [],
    terms: [validations.validateTermsChecked],
    code_of_conduct: [validations.validateCodeOfConductChecked]
  };

  const validateField = (fieldName, value) => {
    let valid = true;

    if (!fieldValidations[fieldName]) {
      // TODO not sure if this is safe
      throw new Error(`No validation defined for ${fieldName}`);
    }

    fieldValidations[fieldName].forEach(validation => {
      let validationResult = validation(fieldName, value);
      if (!validationResult) valid = false;
    });

    return valid;
  };

  const validateStep = step => {
    let fields = [];
    if (step === 1) {
      fields = [
        'first_name',
        'last_name',
        'preferred_name',
        'gender',
        'birth_year',
        'country_of_origin',
        'email'
      ];
    } else if (step === 2) {
      fields = [
        'grade_level',
        'school_name',
        'school_city',
        'school_state',
        'school_country',
        'school_name',
        'major'
      ];
    } else if (step === 3) {
      fields = ['referral', 'additional_comments', 'terms', 'code_of_conduct'];
    }

    let valid = true;

    fields.forEach(field => {
      let validationResult = validateField(field, inputs[field]);
      if (!validationResult) valid = false;
    });

    return valid;
  };

  const handleValidateOnBlur = event => {
    const fieldName = event.target.name;
    const value = event.target.value;

    validateField(fieldName, value);
  };

  return { handleValidateOnBlur, validateField, validateStep };
};

const ApplicationForm = props => {
  const { t } = useTranslation('application-form');
  const [submissionSuccessful, setSubmissionSuccessful] = useState(undefined)

  useEffect(() => {
    logApplicationView();
      }, []);

  const signup = () => {
    const data = inputs;
    data['interest_topics'] = [];
    getTopicsOptions(t)
      .map(option => option.value)
      .filter(topic => !!data[topic])
      .forEach(topic => {
        data['interest_topics'].push(topic);
        data[topic] = undefined;
      });

    if (data['other_topic']) {
      data['interest_topics'].push(data['other_topic']);
      data['other_topic'] = undefined;
    }

    if (data['other_referral']) {
      data['referral'] = `${data['referral']}: ${data['other_referral']}`;
    }

    return requests.post('application/', data).then(
      response => {
        if (DEBUG) console.log(response);
        setSubmissionSuccessful(true);
        logApplicationCompletion(data['email'])
        return true;
      },
      error => {
        if (DEBUG) console.log(error);
        setSubmissionSuccessful(false);
        return false;
      }
    );
  };

  const { inputs, handleInputChange } = useApplicationForm();

  // feedback
  const { feedbacks, handleFeedbackChange } = useApplicationFormFeedback(t);

  const renderError = fieldName => {
    return feedbacks[fieldName]
      ? {
          content: feedbacks[fieldName],
          pointing: 'above'
        }
      : undefined;
  };

  const {
    validateStep,
    validateField,
    handleValidateOnBlur
  } = ApplicationFormValidator(handleFeedbackChange, inputs, t);

  const { stepClick, nextButtonLabel, currentStep } = useStepFlow(
    props.history,
    validateStep,
    signup,
    t
  );

  const appStepList = appFormStep.map(step => {
    return (
      <Step
        key={step.icon}
        className={step.num === currentStep ? 'active' : null}
      >
        <Step.Content>
          <Step.Title>{t(`step.${step.num}.step_name`)}</Step.Title>
        </Step.Content>
      </Step>
    );
  });

  return (
    <PageContainer>
      <Section>
        <Container>
          <Segment padded>
            <Step.Group fluid>{appStepList}</Step.Group>
            <Grid>
              <Grid.Row>
                <Grid.Column width={10}>
                  <ApplicationFormInputs
                    currentStep={currentStep}
                    handleValidateOnBlur={handleValidateOnBlur}
                    handleInputChange={handleInputChange}
                    inputs={inputs}
                    renderError={renderError}
                    feedbacks={feedbacks}
                    validateField={validateField}
                    stepClick={stepClick}
                    nextButtonLabel={nextButtonLabel}
                    submissionSuccessful={submissionSuccessful}
                    setSubmissionSuccessful={setSubmissionSuccessful}
                    t={t}
                  />
                </Grid.Column>
                <Grid.Column width={6}>
                  <Segment>
                    <SubTitle>{t('info.title')}</SubTitle>
                    <List>
                      <ListItem>{t('info.body1')}</ListItem>
                      <ListItem>{t('info.body2')}</ListItem>
                      <ListItem>{t('info.body3')}</ListItem>
                    </List>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
      </Section>
    </PageContainer>
  );
};

const ApplicationFormInputs = props => {
  const {
    currentStep,
    handleValidateOnBlur,
    handleInputChange,
    inputs,
    renderError,
    validateField,
    stepClick,
    nextButtonLabel,
    feedbacks,
    submissionSuccessful,
    setSubmissionSuccessful,
    t
  } = props;

  return (
    <Form size="large">
      {currentStep === 1 && (
        <div id="personalInfo">
          <Title>{t('step.1.title')}</Title>
          <Form.Group widths="equal">
            <Form.Field
              fluid
              required
              id="form-input-control-first-name"
              control={Input}
              label={t('fields.first_name.label')}
              placeholder={t('fields.first_name.placeholder')}
              name="first_name"
              type="text"
              maxLength="100"
              onBlur={handleValidateOnBlur}
              onChange={handleInputChange}
              value={inputs.first_name}
              error={renderError('first_name')}
            />
            <Form.Field
              fluid
              required
              id="form-input-control-last-name"
              control={Input}
              label={t('fields.last_name.label')}
              placeholder={t('fields.last_name.placeholder')}
              name="last_name"
              type="text"
              maxLength="100"
              onBlur={handleValidateOnBlur}
              onChange={handleInputChange}
              value={inputs.last_name}
              error={renderError('last_name')}
            />
            <Form.Field
              fluid
              id="form-input-control-preferred-name"
              control={Input}
              label={t('fields.preferred_name.label')}
              placeholder={t('fields.preferred_name.placeholder')}
              name="preferred_name"
              type="text"
              maxLength="100"
              onChange={handleInputChange}
              value={inputs.preferred_name}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              fluid
              required
              id="form-select-control-gender"
              control={Select}
              options={getGenderOptions(t)}
              label={t('fields.gender.label')}
              placeholder={t('fields.gender.placeholder')}
              name="gender"
              onBlur={() => {
                validateField('gender', inputs.gender);
              }}
              onChange={handleInputChange}
              value={inputs.gender}
              error={renderError('gender')}
            />
            <Form.Field
              fluid
              required
              id="form-input-control-birthday"
              control={Input}
              label={t('fields.birth_year.label')}
              placeholder={t('fields.birth_year.placeholder')}
              name="birth_year"
              onBlur={() => validateField('birth_year', inputs.birth_year)}
              onChange={handleInputChange}
              value={inputs.birth_year}
              error={renderError('birth_year')}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              fluid
              required
              id="form-input-control-country"
              control={Input}
              label={t('fields.country_of_origin.label')}
              placeholder={t('fields.country_of_origin.placeholder')}
              name="country_of_origin"
              type="text"
              maxLength="100"
              onBlur={handleValidateOnBlur}
              onChange={handleInputChange}
              value={inputs.country_of_origin}
              error={renderError('country_of_origin')}
            />
            <Form.Field
              fluid
              required
              id="form-input-control-email"
              control={Input}
              label={t('fields.email.label')}
              placeholder={t('fields.email.placeholder')}
              name="email"
              type="email"
              maxLength="100"
              onBlur={handleValidateOnBlur}
              onChange={handleInputChange}
              value={inputs.email}
              error={renderError('email')}
            />
          </Form.Group>
        </div>
      )}
      {currentStep === 2 && (
        <div id="academicInfo">
          <Title>{t('step.2.title')}</Title>
          <SubTitle>{t('step.2.subtitle')}</SubTitle>
          <Form.Group widths="equal">
            <Form.Field
              fluid
              required
              control={Select}
              options={getGradeLevelOptions(t)}
              label={t('fields.grade_level.label')}
              placeholder={t('fields.grade_level.placeholder')}
              search
              searchInput={{
                id: 'form-select-control-current-grade-level'
              }}
              name="grade_level"
              onBlur={() => validateField('grade_level', inputs.grade_level)}
              onChange={handleInputChange}
              value={inputs.grade_level}
              error={renderError('grade_level')}
            />
            <Form.Field
              fluid
              required
              id="form-input-control-current-school-name"
              control={Input}
              label={t('fields.school_name.label')}
              placeholder={t('fields.school_name.placeholder')}
              name="school_name"
              type="text"
              maxLength="100"
              onBlur={handleValidateOnBlur}
              onChange={handleInputChange}
              value={inputs.school_name}
              error={renderError('school_name')}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              fluid
              required
              id="form-input-control-current-school-city"
              control={Input}
              label={t('fields.school_city.label')}
              placeholder={t('fields.school_city.placeholder')}
              name="school_city"
              type="text"
              maxLength="100"
              onBlur={handleValidateOnBlur}
              onChange={handleInputChange}
              value={inputs.school_city}
              error={renderError('school_city')}
            />
            <Form.Field
              fluid
              id="form-input-control-current-school-state"
              control={Input}
              label={t('fields.school_state.label')}
              placeholder={t('fields.school_state.placeholder')}
              name="school_state"
              type="text"
              maxLength="100"
              onBlur={handleValidateOnBlur}
              onChange={handleInputChange}
              value={inputs.school_state}
              error={renderError('school_state')}
            />
            <Form.Field
              fluid
              required
              id="form-input-control-current-school-country"
              control={Input}
              label={t('fields.school_country.label')}
              placeholder={t('fields.school_country.placeholder')}
              name="school_country"
              type="text"
              maxLength="100"
              onBlur={handleValidateOnBlur}
              onChange={handleInputChange}
              value={inputs.school_country}
              error={renderError('school_country')}
            />
          </Form.Group>
          <p>{t('step.2.new_school')}</p>
          <Form.Group widths="equal">
            <Form.Field
              fluid
              id="form-input-control-new-us-school-name"
              control={Input}
              label={t('fields.destination_school.label')}
              placeholder={t('fields.destination_school.placeholder')}
              name="destination_school"
              type="text"
              maxLength="100"
              onChange={handleInputChange}
              value={inputs.destination_school}
            />
            <Form.Field
              fluid
              required
              id="form-input-control-school-major"
              control={Input}
              label={t('fields.major.label')}
              placeholder={t('fields.major.placeholder')}
              name="major"
              type="text"
              maxLength="100"
              onBlur={handleValidateOnBlur}
              onChange={handleInputChange}
              value={inputs.major}
              error={renderError('major')}
            />
          </Form.Group>
        </div>
      )}

      {currentStep === 3 && (
        <div id="mentorshipInterest">
          <Title>{t('step.3.title')}</Title>
          <Form.Group widths="equal">
            <Form.Field
              fluid
              required
              control={Select}
              options={getReferralOptions(t)}
              label={t('fields.referral.label')}
              placeholder={t('fields.referral.placeholder')}
              search
              searchInput={{ id: 'form-select-control-referral' }}
              name="referral"
              onBlur={() => validateField('referral', inputs.referral)}
              onChange={handleInputChange}
              value={inputs.referral}
            />
            {inputs.referral === 'other' && (
              <Form.Field
                control={Input}
                label={t('fields.other_referral.label')}
                placeholder={t('fields.other_referral.placeholder')}
                name="other_referral"
                type="text"
                maxLength="100"
                onChange={handleInputChange}
                value={inputs.other_referral}
              />
            )}
          </Form.Group>
          <Form.Group grouped>
            <label>{t('fields.interest_topics.label')}</label>
            {getTopicsOptions(t).map(topic => {
              return (
                <Form.Field
                  label={topic.text}
                  key={topic.key}
                  control={Checkbox}
                  name={topic.value}
                  onChange={handleInputChange}
                  type="checkbox"
                />
              );
            })}
          </Form.Group>
          {inputs['other'] && (
            <Form.Field
              fluid
              id="form-input-control-other-topic"
              control={Input}
              label={t('fields.other_topic.label')}
              placeholder={'fields.other_topic.placeholder'}
              name="other_topic"
              type="text"
              maxLength="100"
              onChange={handleInputChange}
              value={inputs.other_topic}
            />
          )}
          <Form.TextArea
            fluid
            label={t('fields.additional_input.label')}
            placeholder={t('fields.additional_input.placeholder')}
            name="additional_input"
            type="text"
            maxLength="1000"
            onChange={handleInputChange}
            value={inputs.additional_input}
          />

          <Form.Field
            required
            id="terms-and-conditions-checkbox"
            label={{
              children: (
                <span>
                  {t('fields.terms_and_conditions.label.agree')}{' '}
                  <TermsModal>
                    {t('fields.terms_and_conditions.label.terms')}
                  </TermsModal>{' '}
                  {t('fields.terms_and_conditions.label.and')}{' '}
                  <PrivacyPolicyModal>
                    {t('fields.terms_and_conditions.label.privacy_policy')}
                  </PrivacyPolicyModal>
                </span>
              )
            }}
            control={Checkbox}
            name="terms"
            onBlur={() => {
              validateField('terms', inputs.terms);
            }}
            onChange={handleInputChange}
          />
          {feedbacks['terms'] && (
            <Label basic color="red">
              {feedbacks['terms']}
            </Label>
          )}

          <Form.Field
            required
            id="code-of-conduct-checkbox"
            label={{
              children: (
                <span>
                  {t('fields.code_of_conduct.label.agree')}{' '}
                  <CodeOfConductModal>
                    {t('fields.code_of_conduct.label.code')}
                  </CodeOfConductModal>
                </span>
              )
            }}
            control={Checkbox}
            name="code_of_conduct"
            onBlur={() => {
              validateField('code_of_conduct', inputs.code_of_conduct);
            }}
            onChange={handleInputChange}
          />
          {feedbacks['code_of_conduct'] && (
            <Label basic color="red">
              {feedbacks['code_of_conduct']}
            </Label>
          )}
          {
            submissionSuccessful === false &&
            <Message
              negative
              header={t('submission_error.header')}
              content={t('submission_error.content')}
              size="mini"
              icon="exclamation circle"
              onDismiss={() => {setSubmissionSuccessful(undefined)}}
            />
          }
          </div>
      )}
      <br />
      <Button.Group id="actionButtons" horizontal="true">
        <Button
          id="form-button-control-previous"
          disabled={currentStep === 1}
          content={t('step.buttons.prev')}
          primary
          type="button"
          size="large"
          onClick={() => stepClick('prev')}
          style={{ marginRight: '10px' }}
        />
        <Button
          id="form-button-control-next"
          content={nextButtonLabel}
          primary
          type="button"
          size="large"
          onClick={() => stepClick('next')}
        />
      </Button.Group>
    </Form>
  );
};

export default ApplicationForm;
