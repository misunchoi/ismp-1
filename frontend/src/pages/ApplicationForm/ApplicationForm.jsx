import React, { useEffect, useState } from 'react';
import { DateInput } from 'semantic-ui-calendar-react';
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
  Label
} from 'semantic-ui-react';

import { 
  Asterisk,
  List,
  ListItem,
  SubTitle, 
  Title
} from './ApplicationForm.styles';

import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsModal from './TermsModal';

import Section from '../../layout/Section';

import { requests } from 'utils/agent';

import {
  appFormStep,
  genderOptions,
  gradeLevelOptions,
  referralOptions
} from './ApplicationOptions';

import { topicsOptions } from './ApplicationOptions';

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
    console.log(_, data);

    let value = data.value;

    if (data.checked !== undefined) {
      // workaround because checkboxes don't have "value"
      value = data.checked ? "checked" : "";
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

const useApplicationFormFeedback = () => {
  const [feedbacks, setFeedbacks] = useState({});

  const handleFeedbackChange = (fieldName, feedback) => {
    setFeedbacks(feedbacks => ({
      ...feedbacks,
      [fieldName]: feedback
    }));
  };

  const checkValid = () => {
    if (DEBUG) console.log('checking validity');
    if (DEBUG) console.log(Object.values(feedbacks));
    return Object.values(feedbacks).every(feedback => !feedback);
  };

  return {
    checkValid,
    handleFeedbackChange,
    feedbacks
  };
};

const useStepFlow = (history, validateStep, signup) => {
  // Step Application
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = appFormStep.length;
  const [nextButtonLabel, setNextButtonLabel] = useState('Next');

  useEffect(() => {
    currentStep === 3
      ? setNextButtonLabel('Submit')
      : setNextButtonLabel('Next');
  }, [currentStep]);

  const stepClick = action => {
    if (action === 'prev' && currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else if (action === 'next' && currentStep < totalSteps && validateStep(currentStep)) {
        setCurrentStep(currentStep + 1);
    } else if (action === 'next' && currentStep === 3 && validateStep(currentStep)) {
      signup().then((result) => {
        if (result) {
          history.push('/apply-success');
        }
      });
    }
  };

  return {
    stepClick, 
    nextButtonLabel, 
    currentStep,
  }
};

const ApplicationFormValidator = (handleFeedbackChange, inputs) => {
  const validations = {
    validateNotBlank: (fieldName, value) => {
      if (!value) {
        handleFeedbackChange(fieldName, 'cannot be blank');
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
        handleFeedbackChange(
          fieldName,
          'please enter email in format email@site.com'
        );
        return false;
      } else {
        handleFeedbackChange(fieldName, '');
        return true;
      }
    },
    validatePhone: (fieldName, value) => {
      const re = /^\+?1?\d{9,15}$/;

      if (!re.test(value)) {
        handleFeedbackChange(
          fieldName,
          'Please enter phone in format +999999999'
        );
        return false;
      } else {
        handleFeedbackChange(fieldName, '');
        return true;
      }
    },
    validateDate: (fieldName, value) => {
      const re = /^(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])-\d{4}$/;

      if (!re.test(value)) {
        handleFeedbackChange(
          fieldName,
          'Please enter date in format MM-DD-YYYY'
        );
        return false;
      } else {
        handleFeedbackChange(fieldName, '');
        return true;
      }
    },
    validateYear: (fieldName, value) => {
      const re=/^\d{4}$/

      if (!re.test(value)) {
        handleFeedbackChange(
          fieldName,
          'Please enter a valid 4-digit year'
        )
        return false;
      } else {
        handleFeedbackChange(fieldName, '');
        return true;
      }
    },
    validateTermsChecked: (fieldName, value) => {
      if (value !== "checked") {
        handleFeedbackChange(
          fieldName,
          'Application cannot be submitted until you agree to the terms of service'
        );
        return false;
      } else {
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
    terms: [validations.validateTermsChecked]
  };

  const validateField = (fieldName, value) => {
    console.log(`validating field ${fieldName} for value ${value}`);
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
        'email',
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
      fields = ['referral', 'additional_comments', 'terms'];
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

  return {handleValidateOnBlur, validateField, validateStep}
};

const ApplicationForm = props => {
    const signup = () => {
      const data = inputs;
      data['interest_topics'] = [];
      topicsOptions.map(option => option.value).filter(topic => !!data[topic]).forEach(topic => {
        data['interest_topics'].push(topic);
        data[topic] = undefined;
      });

      if (data['other_topic']) {
        data['interest_topics'].push(data['other_topic']);
        data['other_topic'] = undefined;
      }


      if (data['other_referral']) {
        data['referral'] = `${data['referral']}: ${data['other_referral']}`
      }

      return requests.post('application/', data).then(
        response => {
          if (DEBUG) console.log(response);
          return true;
        },
        error => {
          if (DEBUG) console.log(error);
          return false;
        }
      );
  };

  const { inputs, handleInputChange } = useApplicationForm();

  // feedback
  const { feedbacks, handleFeedbackChange } = useApplicationFormFeedback();

  const renderError = fieldName => {
    return feedbacks[fieldName]
      ? {
          content: feedbacks[fieldName],
          pointing: 'above'
        }
      : undefined;
  };

  const { validateStep, validateField, handleValidateOnBlur } = ApplicationFormValidator(handleFeedbackChange, inputs)

  const { stepClick, nextButtonLabel, currentStep } = useStepFlow(props.history, validateStep, signup);

  const appStepList = appFormStep.map(step => {
    return (
      <Step
        key={step.icon}
        className={step.num === currentStep ? 'active' : null}
      >
        <Step.Content>
          <Step.Title>{step.title}</Step.Title>
        </Step.Content>
      </Step>
    );
  });

  return (
    <Container>
      <Section>
        <Container>
          <Segment>
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
                  />
                </Grid.Column>
                <Grid.Column width={6}>
                  <Segment>
                    <SubTitle>Important Information</SubTitle>
                    <List ordered>
                      <ListItem>
                        Our application includes a $10 printing fee to be submitted when you pick up your materials.*
                      </ListItem>
                      <ListItem>
                        Our program is 1 year long.*
                      </ListItem>
                      <ListItem>
                        There will be weekly check-ins during the first 6 weeks*. Afterwards, your check-in frequency will be based on your preference.
                      </ListItem>
                      <ListItem>
                        Quarterly check-ins are recommended.
                      </ListItem>
                    </List>
                    <Asterisk>*MAY VARY BASED ON CAMPUS.</Asterisk>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
      </Section>
    </Container>
  );
};

const ApplicationFormInputs = (props) => {
 const {
    currentStep,
    handleValidateOnBlur,
    handleInputChange,
    inputs,
    renderError,
    validateField,
    stepClick,
    nextButtonLabel,
    feedbacks
  } = props;
  return (
    <Form size="large">
      {currentStep === 1 && (
        <div id="personalInfo">
          <Title>Section 1: Personal and Contact Information</Title>
          <Form.Group widths="equal">
            <Form.Field
              fluid
              required
              id="form-input-control-first-name"
              control={Input}
              label="First name"
              placeholder="First name"
              name="first_name"
              type="text"
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
              label="Last name"
              placeholder="Last name"
              name="last_name"
              onBlur={handleValidateOnBlur}
              type="text"
              onChange={handleInputChange}
              value={inputs.last_name}
              error={renderError('last_name')}
            />
            <Form.Field
              fluid
              id="form-input-control-preferred-name"
              control={Input}
              label="English name"
              placeholder="English name"
              name="preferred_name"
              type="text"
              onChange={handleInputChange}
              value={inputs.preferred_name}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              fluid
              required
              control={Select}
              options={genderOptions}
              label={{
                children: 'Gender',
                htmlFor: 'form-select-control-gender'
              }}
              placeholder="Gender"
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
              control={Input}
              label={{
                children: 'Birth Year'
                // htmlFor: 'something'
              }}
              placeholder="YYYY"
              name="birth_year"
              onBlur={() => validateField('birth_year', inputs.birth_year)}
              id="form-input-control-birthday"
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
              label="Country of Origin"
              placeholder="Country of Origin"
              name="country_of_origin"
              type="text"
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
              label="Email"
              placeholder="Email"
              name="email"
              type="email"
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
          <Title>Section 2: Academic Information</Title>
          <SubTitle>Current School Information</SubTitle>
          <Form.Group widths="equal">
            <Form.Field
              fluid
              required
              control={Select}
              options={gradeLevelOptions}
              label={{
                children: 'Grade Level',
                htmlFor: 'form-select-control-current-grade-level'
              }}
              placeholder="Grade Level"
              search
              searchInput={{
                id: 'form-select-control-current-grade-level'
              }}
              name="grade_level"
              onBlur={() =>
                validateField('grade_level', inputs.grade_level)
              }
              onChange={handleInputChange}
              value={inputs.grade_level}
              error={renderError('grade_level')}
            />
            <Form.Field
              fluid 
              required
              id="form-input-control-current-school-name"
              control={Input}
              label="School Name"
              placeholder="School Name"
              name="school_name"
              type="text"
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
              label="School City"
              placeholder="City"
              name="school_city"
              type="text"
              onBlur={handleValidateOnBlur}
              onChange={handleInputChange}
              value={inputs.school_city}
              error={renderError('school_city')}
            />
            <Form.Field
              fluid
              id="form-input-control-current-school-state"
              control={Input}
              label="School State / Province"
              placeholder="State / Province"
              name="school_state"
              type="text"
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
              label="School Country"
              placeholder="Country"
              name="school_country"
              type="text"
              onBlur={handleValidateOnBlur}
              onChange={handleInputChange}
              value={inputs.school_country}
              error={renderError('school_country')}
            />
          </Form.Group>
          <p>If attending a new U.S. school next school term:</p>
          <Form.Group widths="equal">
            <Form.Field
              fluid
              id="form-input-control-new-us-school-name"
              control={Input}
              label="US School Name"
              placeholder="School Name"
              name="destination_school"
              type="text"
              onChange={handleInputChange}
              value={inputs.destination_school}
            />
            <Form.Field
              fluid
              required
              id="form-input-control-school-major"
              control={Input}
              label="Current or Future Major"
              placeholder="Major"
              name="major"
              type="text"
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
          <Title>Section 3: Mentorship Information</Title>
          <Form.Group widths="equal">
            <Form.Field
              fluid
              required
              control={Select}
              options={referralOptions}
              label={{
                children: 'How Did You Hear About Us?',
                htmlFor: 'form-select-control-referral'
              }}
              placeholder="Referral"
              search
              searchInput={{ id: 'form-select-control-referral' }}
              name="referral"
              onBlur={() => validateField('referral', inputs.referral)}
              onChange={handleInputChange}
              value={inputs.referral}
            />
            {inputs.referral === 'other' && <Form.Field
              control={Input}
              label="Please Describe"
              placeholder="Other"
              name="other_referral"
              type="text"
              onChange={handleInputChange}
              value={inputs.other_referral}
            />}
          </Form.Group>
          <Form.Group grouped>
            <label>Choose topics interested in:</label>
            {topicsOptions.map(topic => {
              return (
                <Form.Field
                  label={topic.text}
                  // value={topic.value}
                  key={topic.key}
                  control={Checkbox}
                  name={topic.value}
                  onChange={handleInputChange}
                  type="checkbox"
                />
              );
            })}
          </Form.Group>
          {inputs['other'] && <Form.Field
            fluid
            id="form-input-control-other-topic"
            control={Input}
            label="Other Topic"
            placeholder="Other Topic"
            name="other_topic"
            type="text"
            onChange={handleInputChange}
            value={inputs.other_topic}
          />}
          <Form.TextArea
            fluid
            label="Questions / Comments"
            placeholder="Questions / Comments"
            name="additional_input"
            type="text"
            onChange={handleInputChange}
            value={inputs.additional_input}
          />

          <Form.Field
            required
            id='terms-and-conditions-checkbox'
            label={{
              children: 
              <span>
                I agree to the <TermsModal>Terms and Services</TermsModal> and <PrivacyPolicyModal>Privacy Policy</PrivacyPolicyModal>
              </span>,
              htmlFor: 'terms-and-conditions-checkbox'
            }}
            control={Checkbox}
            name="terms"
            onBlur={() => {
              validateField('terms', inputs.terms)}
            } 
            onChange={handleInputChange}
          />
          {feedbacks['terms'] &&
          <Label
            basic
            color='red'
          >{feedbacks['terms']}</Label>}
        </div>
      )}
      <br />

      <Button.Group id="actionButtons" horizontal="true">
        <Button
          id="form-button-control-previous"
          disabled={currentStep === 1}
          content="Previous"
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
}


export default ApplicationForm;
