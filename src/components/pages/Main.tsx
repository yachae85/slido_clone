import styled from 'styled-components';
import MainHeader from '../UI/organisms/MainHeader';
import { SearchForm } from '../UI/organisms/SearchForm';

export default function Main() {
  return (
    <Container>
      <SearchForm />
      <MainHeader />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
