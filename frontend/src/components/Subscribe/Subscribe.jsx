import Header from 'layout/Header';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input } from 'semantic-ui-react';
import styled from 'styled-components';
import mixins from 'styles/mixins';
import theme from 'styles/theme';
import { SubscribeNewsletter } from 'utils/agent';

const Subscribe = () => {
  const { t } = useTranslation(['general', 'subscribe']);
  const [email, setEmail] = useState('');

  const handleChange = (_, data) => {
    setEmail(data.value);
  };

  const handleSubmit = () => {
    SubscribeNewsletter.post({ email }).then(response => {
      if (response.error) {
        alert(response.error);
      } else {
        alert(t('subscribe:subscribe_success'));
      }
    });
  };

  return (
    <SubscribeSection backgroundColor={theme.colors.blue}>
      <Header
        h3
        sans
        title={t('subscribe:subscribe_to_our_monthly_newsletter')}
        color={theme.colors.white}
      />
      <EmailInput
        fluid
        placeholder={t('email_address')}
        type="email"
        onChange={handleChange}
        action={
          <SubscribeButton
            type="submit"
            onClick={handleSubmit}
            content={t('subscribe')}
          />
        }
      />
    </SubscribeSection>
  );
};

const SubscribeSection = styled.section`
  background: ${props => props.backgroundColor};
  padding-top: 64px;
  padding-bottom: 64px;
  ${mixins.flexCenterColumn}
  ${mixins.responsivePadding};
`;

const EmailInput = styled(Input)`
  &&& {
    width: 80%;
    max-width: 42rem;
    height: 3rem;
    font-size: ${theme.fontSizes.sm};
    margin-top: 32px;
  }
`;

const SubscribeButton = styled(Button)`
  &&& {
    font-weight: normal;
    color: ${theme.colors.black};
    background: ${theme.colors.yellow};
  }
`;

export default Subscribe;
