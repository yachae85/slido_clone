import styled from 'styled-components';
import SearchForm from '../UI/organisms/SearchForm';
import MainHeader from '../UI/organisms/MainHeader';
import Utils from '../UI/organisms/Utils';
import MiddleBox from '../UI/organisms/MiddleBox';
import Cards from '../UI/organisms/Cards';
import Badegs from '../UI/organisms/Badges';
import Customers from '../UI/organisms/Customers';

export default function Main() {
  return (
    <Container>
      <SearchForm />
      <MainHeader />
      <Utils />
      <MiddleBox />
      <Cards />
      <Badegs />
      <Customers />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
