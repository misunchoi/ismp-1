import React from 'react';
import InstructionCard from './InstructionCard';

export default {
  component: InstructionCard,
  title: 'InstructionCard',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => <InstructionCard />;
