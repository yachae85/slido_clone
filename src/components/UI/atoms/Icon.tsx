import styled from 'styled-components';

const Logo = styled.img`
  width: 72px;
  height: 24px;
`;

const Container = styled.div`
  flex: 1;
`;

const LogoIMG = () => {
  return (
    <Container>
      <Logo src='/icons/ic_logo.svg' />
    </Container>
  );
};

const Cookie = styled.img`
  max-width: 5.5rem;
  height: auto;
  padding-right: 1rem;
`;

const CookieIcon = () => {
  return <Cookie src='/icons/cookie.svg' />;
};

export { LogoIMG, CookieIcon };
