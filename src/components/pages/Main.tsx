import styled from 'styled-components';
import SearchForm from '../UI/organisms/SearchForm';
import MainHeader from '../UI/organisms/MainHeader';
import Utils from '../UI/organisms/Utils';
import MiddleBox from '../UI/organisms/MiddleBox';
import Cards from '../UI/organisms/Cards';
import Badegs from '../UI/organisms/Badges';
import Customers from '../UI/organisms/Customers';
import GreenPlace from '../UI/organisms/GreenPlace';
import Posts from '../UI/organisms/Posts';
import WhatIsSlido from '../UI/organisms/WhatIsSlido';
import Slider from '../UI/organisms/Slider';
import MainFeatures from '../UI/organisms/MainFeatures';

export default function Main() {
  return (
    <Container>
      <SearchForm />
      <MainHeader />
      <Utils />
      <WhatIsSlido />
      <MiddleBox />
      <MainFeatures />
      <Cards />
      <Badegs />
      <Slider />
      <Customers />
      <GreenPlace />
      <Posts />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
