import React from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';
import Markdown from 'react-remarkable';
import { useTranslation } from 'react-i18next';
import { Spaced } from './PolicyContent.styles';

const TermsModal = () => {
  const { t } = useTranslation('terms-of-use');

  const generateBlock = section => {
    let bodyElements = [];
    for (let i = 1; i < 100; i++) {
      const bodyKey = section + '.body' + i;
      if (t(bodyKey) === bodyKey) {
        break;
      } else {
        bodyElements.push(t(bodyKey));
      }
    }

    return (
      <div>
        <Markdown>{t(section + '.title')}</Markdown>
        {bodyElements.map(text => (
          <Spaced>
            <Markdown>{text}</Markdown>
          </Spaced>
        ))}
        <br />
      </div>
    );
  };

  const sections = [
    'acceptance_of_the_terms_of_use',
    'changes_to_the_terms_of_use',
    'accessing_the_website_and_account_security',
    'intellectual_property_rights',
    'prohibited_uses',
    'user_contributions',
    'monitoring_and_enforcement',
    'content_standards',
    'copyright_infringement',
    'reliance_on_information_posted',
    'disclaimer_of_warranties',
    'limitation_on_liability',
    'indemnification',
    'governing_law_jurisdiction_and_class_action_waiver',
    'waiver_and_severability',
    'entire_agreement'
  ];

  return (
    <Modal trigger={<a as={Button}>Terms and Conditions</a>}>
      <Modal.Header>
        <Markdown>{t('title')}</Markdown>
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Markdown>{t('last_modified')}</Markdown>
          <Spaced>
            <Markdown>{t('note')}</Markdown>
          </Spaced>
          {sections.map(section => generateBlock(section))}
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default TermsModal;
