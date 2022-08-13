import styled from 'styled-components';
import { TryButton } from '../atoms/Button';
import { GreeTitle } from '../atoms/Text';

export default function GreenPlace() {
  return (
    <Container>
      <TextWrapper>
        <GreeTitle>Make your meetings more interactive with Slido.</GreeTitle>
        <TryButtonWrapper>
          <TryButton>Try it free</TryButton>
        </TryButtonWrapper>
      </TextWrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 6rem 0;
  width: 100%;

  text-align: center;

  background-color: #39ac37;
`;

const TextWrapper = styled.div`
  padding: 0 2rem;
  margin: 0 auto;
  position: relative;
  width: 100%;
  max-width: 80rem;
`;

const TryButtonWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
`;
