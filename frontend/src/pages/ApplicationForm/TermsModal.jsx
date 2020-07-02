import React from 'react';
import {
  Modal,
  Button
} from 'semantic-ui-react';
import TranslationParser from './TranslationParser';
import { Title, Body } from './PolicyContent.styles'

const TermsModal = (props) => {
  const file = 'terms-of-use'

  // should match file keys
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
    'entire_agreement',
  ];

  const Translation = TranslationParser(file, sections);

  return(
    <Modal trigger={<a type="button" as={Button}>{props.children}</a>}>
      <Modal.Header>
        {Translation.generateForKey('title')}
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {Translation.generateForKey('last_modified')}
          <Body>{Translation.generateForKey('note')}</Body>
          {Translation.generateBody(sections, Title, Body)}
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default TermsModal;
