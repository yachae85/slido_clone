import styled from 'styled-components';
import { FooterLinks } from '../molecules/FooterLinks';
import { FooterSocials } from '../molecules/FooterSocials';

export default function Footer() {
  return (
    <Container>
      <FooterLinks />
      <FooterSocials />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5rem;
  padding-bottom: 1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;

  font-size: 0.875rem;
  line-height: 1.5rem;
`;
