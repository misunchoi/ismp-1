import React from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';
import Markdown from 'react-remarkable';
import { useTranslation } from 'react-i18next';

const PrivacyPolicyModal = props => {
  const { t } = useTranslation('privacy-policy');

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
          <Markdown>{text}</Markdown>
        ))}
        <br />
      </div>
    );
  };

  const sections = [
    'introduction',
    'children_under_the_age_of_13',
    'information_we_collect_about_you_and_how_we_collect_it',
    'information_you_provide_to_us',
    'information_we_collect_through_automatic_data_collection_technologies',
    'how_we_use_your_information',
    'disclosure_of_your_information',
    'california_do_not_track_disclosure',
    'using_caution_when_sharing_information_with_others',
    'data_security',
    'changes_to_our_privacy_policy'
  ];

  return (
    <Modal trigger={<a as={Button}>Privacy Policy</a>}>
      <Modal.Header>
        <Markdown>{t('title')}</Markdown>
      </Modal.Header>
      <Modal.Content>
        <Markdown>{t('last_modified')}</Markdown>
        <Modal.Description>
          {sections.map(section => generateBlock(section))}
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default PrivacyPolicyModal;
