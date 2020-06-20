import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import theme from 'styles/theme';

const languageOptions = [
  { key: 'English', text: 'English', value: 'en' },
  { key: 'Chinese', text: '中文', value: 'zh' },
  // { key: 'Japanese', text: '日本語', value: 'ja' },
  // { key: 'Korean', text: '한국어', value: 'ko' },
  // { key: 'Vietnamese', text: 'Tiếng Việt', value: 'vi' }
];

const LanguageList = ({ mobile }) => {
  const { i18n } = useTranslation();

  const defaultSetLang = i18n.language;
  const [langValue, setLangValue] = useState(defaultSetLang);

  const selectLanguage = lang => {
    setLangValue(lang);
    i18n.changeLanguage(lang);
  };

  const containerMobile = {
    display: 'flex', 
    alignSelf: 'center', 
    justifyContent: 'center', 
    marginRight: '10px',
  };

  const menuMobile = {
    marginTop: '-5px', 
    width: '100%', 
    justifyContent: 'center', 
    fontSize: theme.fontSizes.sm
  };

  const menuItemStyle = {
    textAlign: 'center'
  };

  return (
    <Dropdown item icon="world" style={mobile ? containerMobile : null}>
      <Dropdown.Menu style={mobile ? menuMobile : null}>
        {languageOptions.map(opt => {
          return (
            <Dropdown.Item
              active={opt.value === langValue}
              key={opt.key}
              onClick={() => selectLanguage(opt.value)}
              style={menuItemStyle}
            >
              {opt.text}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageList;
