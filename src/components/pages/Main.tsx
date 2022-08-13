import styled from 'styled-components';
import { SearchForm } from '../UI/organisms/SearchForm';

export default function Main() {
  return (
    <Container>
      <SearchForm />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
