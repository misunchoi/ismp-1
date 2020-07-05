import React from 'react';
import Markdown from 'react-remarkable';
import { useTranslation } from 'react-i18next';

// this component takes a json file formatted like so:
// title: "title"
// last_modified: "last mod"
// header_key: {
//   title: "header title",
//   body1: "first line of body",
//   body2: "can have as many as you need"
// },
// header_key_something_else: {
//  .. etc.
// }
// and iterates through it and renders it cleanly
// Usage Example: TermsOfUse.jsx, PrivacyPolicy.jsx

const TranslationParser = (
  translationFile, // json
  headerKeys // list of headers in json file
) => {
  const { t } = useTranslation(translationFile);

  const isKeyInFile = key => {
    return t(key) !== key;
  };

  const generateBlock = (section, TitleComponent, BodyComponent) => {
    let bodyElements = [];

    if (isKeyInFile(section + '.body')) {
      bodyElements.push(t(section + '.body'));
    } else {
      for (let i = 1; i < 100; i++) {
        const bodyKey = section + '.body' + i;

        if (!isKeyInFile(bodyKey)) {
          break;
        } else {
          bodyElements.push(t(bodyKey));
        }
      }
    }

    return (
      <div>
        <TitleComponent>
          <Markdown>{t(section + '.title')}</Markdown>
        </TitleComponent>
        {bodyElements.map(text => (
          <BodyComponent>
            <Markdown>{text}</Markdown>
          </BodyComponent>
        ))}
        <br />
      </div>
    );
  };

  // TODO: generate these sections here from reading the file
  // const sections = headerKeys;

  return {
    generateForKey: key => <Markdown>{t(key)}</Markdown>,
    generateBody: (sections, TitleComponent, BodyComponent) => {
      return sections.map(section =>
        generateBlock(section, TitleComponent, BodyComponent)
      );
    }
  };
};
export default TranslationParser;
