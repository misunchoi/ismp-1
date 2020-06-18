import Header from 'layout/Header';
import React from 'react';
import { Link } from 'react-router-dom';
import { Image as SemanticImage, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const CollegeCard = ({ college }) => {
  const { name, abbr, active, imageUrl } = college;

  return (
    <Container>
      <ImgContainer>
        <Image alt={name + abbr + ' campus'} rounded src={imageUrl} />
        <ButtonContainer>
          {active ? (
            <Link to={`/mentors?campus=${abbr}`}>
              <Button secondary>View Mentors</Button>
            </Link>
          ) : (
            <Button>Currently No Campus Mentors</Button>
          )}
        </ButtonContainer>
      </ImgContainer>
      {active ? (
        <Header size="h3" font="sans">
          <Link to={`/mentors?campus=${abbr}`}>{name}</Link>
        </Header>
      ) : (
        <Header size="h3" font="sans" color="grey">
          {name}
        </Header>
      )}
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const Image = styled(SemanticImage)`
  margin-bottom: -12px;
`;

const ButtonContainer = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;

const ImgContainer = styled.div`
  position: relative;

  &:hover ${Image} {
    opacity: 0.3;
  }

  &:hover ${ButtonContainer} {
    opacity: 1;
  }
`;

export default CollegeCard;
