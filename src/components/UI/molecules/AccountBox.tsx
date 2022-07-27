import styled from 'styled-components';
import { Login, SignUp } from '../atoms/Text';

export default function AccountBox() {
  return (
    <Container>
      <Login hoverEffect={true}>Log In</Login>
      <SignUp>Sign Up</SignUp>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;
