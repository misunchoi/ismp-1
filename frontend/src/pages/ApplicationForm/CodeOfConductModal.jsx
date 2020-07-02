import React from 'react';
import {
  Modal,
  Button,
} from 'semantic-ui-react';
import TranslationParser from './TranslationParser';
import { BoldedTitle, Body } from './PolicyContent.styles';

const PrivacyPolicyModal = (props) => {
  const file = 'code-of-conduct'

  // should match keys in file
  const sections = [
    'applicationAndEnrollment',
    'mimimumAgeRequirement',
    'useOfLanguageAndImages',
    'personalRespect',
    'zeroTolerancePolicyForHarassment',
    'virtualMeetings',
    'noAcademicCreditOrGuarantees',
    'emergencies'
  ];

  const Translation = TranslationParser(file);

  return(
    <Modal trigger={<a type="button" as={Button}>{props.children}</a>}>
      <Modal.Header>
        {Translation.generateForKey('title')}
      </Modal.Header>
      <Modal.Content>
        {Translation.generateForKey('lastUpdated')}
        <br />
        <Modal.Description>
          {Translation.generateForKey('intro')}
          {Translation.generateBody(sections, BoldedTitle, Body)}
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default PrivacyPolicyModal;
