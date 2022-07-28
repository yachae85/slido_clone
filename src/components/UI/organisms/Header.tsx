import classNames from 'classnames';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LogoIMG } from '../atoms/Logo';
import AccountBox from '../molecules/AccountBox';
import HeaderMenu from '../molecules/HeaderMenu';

export default function Header() {
  const [scrollY, setScrollY] = useState(false);

  const scrollEvent = () => {
    if(window.scrollY) {
      setScrollY(true);
    } else {
      setScrollY(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', scrollEvent);

    return () => window.removeEventListener('scroll', scrollEvent);
  },[]) 

  return (
    <Wrapper className={classNames({ scrolling: scrollY })}>
      <Container>
        <LogoIMG />
        <HeaderMenu />
        <AccountBox />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: fixed;

  &.scrolling {
    box-shadow: 0 0.125rem 0.125rem rgb(0 0 0 / 10%);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80px;
  max-width: 80rem;
  padding: 0 2rem;
  margin: 0 auto;
`;
