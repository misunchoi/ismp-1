import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import Styled from 'styled-components';
import theme from '../../styles/theme';
import { SubscribeNewsletter } from 'utils/agent';
import { useTranslation } from 'react-i18next';

const Container = Styled.div`
  width: 100%;
  padding: 40px 5%;
  background-color: ${theme.colors.blue};
  text-align: center;
  display: grid;
  justify-items: center;
`;

const Title = Styled.h3`
  font-size: ${theme.fontSizes.h3};
  color: ${theme.colors.white};
  margin-bottom: 24px;
`;

const StyledInput = Styled(Input)`
  &&& {
    width: 80%;
    max-width: 42rem;
    height: 3rem;
    font-size: ${theme.fontSizes.sm};
  }
`;

const SubscribeButton = Styled(Button)`
  &&& {
    font-weight: normal;
    color: ${theme.colors.black};
    background: ${theme.colors.yellow};
  }
`;

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const { t } = useTranslation(['general', 'subscribe']);

  const handleSubmit = event => {
    let body = {
      email: email
    };

    SubscribeNewsletter.post(body).then(response => {
      if (response['error']) {
        alert(response['error']);
      } else {
        alert(t('subscribe:subscribe_success'));
      }
    });
  };

  const handleChange = (event, data) => {
    setEmail(data.value);
  };

  return (
    <Container>
      <Title>{t('subscribe:subscribe_success')}</Title>
      <StyledInput
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
        actionPosition="right"
      />
    </Container>
  );
};

export default Subscribe;
