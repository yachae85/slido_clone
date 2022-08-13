import styled from 'styled-components';
import { HeaderSubTitle, HeaderTitle } from '../atoms/Text';
import { HeaderVideo } from '../molecules/HeaderVideo';
import { SubscribeFrom } from '../molecules/SubscribeForm';

export default function MainHeader() {
  return (
    <Container>
      <HeaderTitle>
        Your go-to interaction app <br /> for hybrid meetings
      </HeaderTitle>
      <HeaderSubTitle>
        Engage your participants with live polls, Q&A, quizzes and word clouds
        <br />— whether you meet in the office, online or in-between.
      </HeaderSubTitle>
      <SubscribeFrom />
      <HeaderVideo />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 0;
  text-align: center;
`;
