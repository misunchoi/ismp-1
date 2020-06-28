import React, { useState } from 'react';
import { Responsive, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import sizes from '../../styles/sizes';
import Truncate from 'react-truncate';
import section from '../../layout/Section';
import mixins from 'styles/mixins';

// TODO: come from an API later
const testimonials = [
  {
    name: 'Stella Seo',
    school: 'UCSD',
    major: 'Chem & Biochem, Ph.D',
    hometown: 'Seoul, Korea',
    quote:
      'As an international graduate student, my social pool was very limited, and I didn’t know how to get through this big transition. However, after I met my mentor, I was able to have a valuable experience with good people that I would have never had without this program. My mentor not only taught me American life and culture but also helped me with English, which made it easier to complete my first quarter in the US.',
    image: 'https://ismp-us-east-1.s3.amazonaws.com/testimonials/headshots/stella.jpg'
  },
  {
    name: 'Taiga Koma',
    school: 'OCC',
    major: 'Psychology',
    hometown: 'Japan',
    quote:
      'ISMP is a nice place to start your college life! Mentors are helping the international students with understanding American culture. Even a shy student can make friends in this community.',
    image: 'https://semantic-ui.com/images/avatar2/large/matthew.png'
  },
  {
    name: 'Gabi Lee',
    school: 'UCLA',
    major: 'Sociology, Senior',
    hometown: '',
    quote:
      'My mentor is very understanding and resourceful, helping me with job search, interpersonal skills, and personal growth, which allows my senior year to be less stressful.',
    image: 'https://ismp-us-east-1.s3.amazonaws.com/testimonials/headshots/gabi.jpg'
  }
];

const StyledSection = styled.section`
  background: ${props => props.backgroundColor};
  margin: 0;
  padding: 64px 0 0 0;
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

const DesktopContainer = styled(section)`
  margin: 0;
  padding-top: 64px;
  padding-bottom: 64px;
  ${mixins.responsivePadding};
  display: flex;
  flex-wrap: no-wrap;
  align-items: flex-start;
  justify-content: space-evenly;
  background-color: ${theme.colors.grey};
`;

const MobileContainer = styled(DesktopContainer)`
  flex-direction: row;
  flex-wrap: wrap;
`;

const Container = ({ children }) => {
  return (
    <>
      <Responsive as={DesktopContainer} minWidth={sizes.tablet}>
        {children}
      </Responsive>
      <Responsive as={MobileContainer} maxWidth={sizes.tablet}>
        {children}
      </Responsive>
    </>
  );
};

const DesktopRatio = styled.div`
  width: 30%;
  max-width: 270px;
`;

const MobileRatio = styled(DesktopRatio)`
  width: 100%;
  max-width: 100%;
  margin: 1em;
`;

const CardContainer = ({ children }) => {
  return (
    <>
      <Responsive as={DesktopRatio} minWidth={sizes.tablet}>
        {' '}
        {children}{' '}
      </Responsive>
      <Responsive as={MobileRatio} maxWidth={sizes.tablet}>
        {' '}
        {children}{' '}
      </Responsive>
    </>
  );
};

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 5px 5px ${theme.colors.darkGrey};
  background-color: #fafafa;
  padding: 0.25em 1em 1.5em 1em;
  margin: 0;
  font-family: ${theme.fonts.PTSerif};
`;

const QuoteAndContentContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
`;

const QuotationMark = styled.h1`
  width: 100%;
  min-height: 32px;
  height: 40px;
  font-family: ${theme.fonts.PTSerif};
  font-size: 56px;
  margin: 0;
  text-align: center;
`;

const ColoredQuotationMark = ({ index }) => {
  const color = index % 2 === 1 ? theme.colors.yellow : theme.colors.lightBlue;

  return <QuotationMark style={{ color: `${color}` }}>“</QuotationMark>;
};

const Quote = styled(Truncate)`
  width: 100%;
  height: 100%;
  overflow-wrap: break-word;
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.md};
  line-height: 30px;
`;

const Divider = styled.div`
  width: 3.5em;
  height: 1px;
  border-bottom: 1px solid grey;
  margin: 0.5em auto;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  padding: 0 0 0.5em 0;
  font-style: ${theme.fonts.PTSerif};
`;

const Name = styled.div`
  color: black;
  font-size: ${theme.fontSizes.sm};
`;

const Description = styled(Name)`
  font-style: italic;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const LinkButton = styled(Button)`
  &&& {
    font-size: 12;
    padding: 0;
    margin: 0;
    background: none;
    color: gray;
  }
`;

const TestimonialQuote = ({ children }) => {
  const [numLines, setNumLines] = useState(2);

  return (
    <>
      <Quote lines={numLines} ellipsis={<span>...</span>}>
        {children}
      </Quote>
      <span>
        {console.log(numLines)}
        <LinkButton
          onClick={() =>
            setNumLines(numLines === 2 ? 0 : numLines === 3 ? 0 : 3)
          }
        >
          {numLines === 2
            ? 'read more'
            : numLines === 3
            ? 'read more'
            : 'read less'}
        </LinkButton>
      </span>
    </>
  );
};

const Cards = () => {
  return (
    <>
      {testimonials.map((info, i) => {
        return (
          <CardContainer key={i}>
            <TestimonialCard key={i}>
              <QuoteAndContentContainer>
                <ColoredQuotationMark index={i} />
                <TestimonialQuote>{info.quote}</TestimonialQuote>
              </QuoteAndContentContainer>

              <Divider />

              <Profile>
                <ProfileImage src={info.image} alt="test" />
                <Name>{info.name}</Name>
                <Description lines={1} ellipsis={<span>...</span>}>
                  {info.major} - {info.school}
                </Description>
              </Profile>
            </TestimonialCard>
          </CardContainer>
        );
      })}
    </>
  );
};

export class TestimonialCards extends React.Component {
  render() {
    return (
      <StyledSection>
        <Container>
          <Cards />
        </Container>
      </StyledSection>
    );
  }
}

export default TestimonialCards;
