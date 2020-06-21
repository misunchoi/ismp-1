import React from 'react';
import {
  Modal,
  Button,
} from 'semantic-ui-react';
import TranslationParser from './TranslationParser';
import { Title, Body } from './PolicyContent.styles';

const PrivacyPolicyModal = (props) => {
  const file = 'privacy-policy'

  // should match keys in file
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

  const Translation = TranslationParser(file, sections);

  return(
    <Modal trigger={<a type="button" as={Button}>Privacy Policy</a>}>
      <Modal.Header>
        {Translation.generateForKey('title')}
      </Modal.Header>
      <Modal.Content>
        <Body>{Translation.generateForKey('last_modified')}</Body>
        <br />
        <Modal.Description>
          {Translation.generateBody(sections, Title, Body)}
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default PrivacyPolicyModal;
