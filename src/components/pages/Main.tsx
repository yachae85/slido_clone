import styled from 'styled-components';
import MainHeader from '../UI/organisms/MainHeader';
import SearchForm from '../UI/organisms/SearchForm';
import Utils from '../UI/organisms/Utils';

export default function Main() {
  return (
    <Container>
      <SearchForm />
      <MainHeader />
      <Utils />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
