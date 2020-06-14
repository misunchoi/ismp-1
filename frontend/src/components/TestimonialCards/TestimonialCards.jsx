import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import sizes from '../../styles/sizes';
import { Responsive, Modal } from 'semantic-ui-react';
import Section from 'layout/Section';
import { Desktop } from 'styles/responsive';

// TODO: come from an API later
const mentorsInfo = [
  {
    image: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
    name: 'Matthew Lastname',
    school: 'Los Angeles, CA',
    education: 'U.C. Berkeley',
    major: 'Computer Science',
    skills: 'English Training, Web Development',
    testimonial:
      'I joined ISMP and now I am writing a testimonial. Here is one that is two sentences long.'
  },
  {
    image: 'https://semantic-ui.com/images/avatar2/large/molly.png',
    name: 'Molly Lastname',
    school: 'Los Angeles, CA',
    education: 'U.C. San Diego',
    major: 'History',
    skills: 'English Training, Web Development',
    testimonial: 'It was good'
  },
  {
    image: 'https://semantic-ui.com/images/avatar2/large/elyse.png',
    name: 'Jennifer Lastname',
    school: 'Los Angeles, CA',
    education: 'U.C. Irvine',
    major: 'Biology',
    skills: 'English Training, Web Development',
    testimonial:
      'I feel like writing a very long testimonial, so here goes: looooooooooonggggggggggg ttttttessstimoniallllllllllllllllllllllll. This is a lot of text. Hopefully this looks okay on the UI. What happens now? Who knows? '
  }
];

const DesktopContainer = styled(Section)`
  /* max-height: 285px; */
  display: flex;
  flex-wrap: no-wrap;
  padding: 2em 13.5%;
  align-items: center;
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
  position: relative;
  width: 30%;
  max-width: 270px;
  padding-top: 40%;
`;

const MobileRatio = styled(DesktopRatio)`
  padding-top: 285px;
  width: 100%;
  margin: 1em;
`;

const CardRatio = ({ children }) => {
  return (
    <>
      <Responsive as={DesktopRatio} minWidth={800}>
        {children}
      </Responsive>
      <Responsive as={MobileRatio} maxWidth={800}>
        {children}
      </Responsive>
    </>
  );
};

const TestimonialCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 10px;
  box-shadow: 0 5px 5px ${theme.colors.darkGrey};
  background-color: #fafafa;
  padding: 0.25em 1em 1.5em 1em;
  margin: 0;
  font-family: ${theme.fonts.PTSerif};
  &:hover {
    background-color: white;
  }
`;

const QuoteAndContentContainer = styled.div`
  height: 62%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const QuotationMark = styled.h1`
  width: 100%;
  min-height: 32px;
  height: 40px;
  font-family: ${theme.fonts.PTSerif};
  font-size: ${theme.fontSizes.h1};
  margin: 0;
  text-align: center;
`;

const ColoredQuotationMark = ({ index }) => {
  const color = index % 2 === 1 ? theme.colors.yellow : theme.colors.lightBlue;

  return <QuotationMark style={{ color: `${color}` }}>“</QuotationMark>;
};

const Quote = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  color: ${theme.colors.black};
  font-size: 100%;
  /* font-size: ${theme.fontSizes.md}; */
  text-align: center;
  line-height: 150%;
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
  height: 38%;
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

const Cards = () => {
  return (
    <>
      {mentorsInfo.map((info, i) => {
        return (
          <CardRatio>
            <TestimonialCard key={i}>
              <QuoteAndContentContainer>
                <ColoredQuotationMark index={i} />
                <Quote>{info.testimonial}</Quote>
              </QuoteAndContentContainer>

              <Divider />

              <Profile>
                <ProfileImage src={info.image} alt="test" />
                <Name>{info.name}</Name>
                <Description>
                  {info.major}, {info.education}
                </Description>
              </Profile>
            </TestimonialCard>
          </CardRatio>
        );
      })}
    </>
  );
};
export class TestimonialCards extends React.Component {
  render() {
    return (
      <Container>
        <Cards />
      </Container>
    );
  }
}

export default TestimonialCards;
