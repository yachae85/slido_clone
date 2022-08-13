import styled from 'styled-components';
import { DemoButton, FreeButton } from '../atoms/Text';

export const SubscribeFrom = () => {
  return (
    <Container>
      <FreeButton>Get started for free</FreeButton>
      <DemoButton>Schedule a demo</DemoButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1.25rem;
`;
