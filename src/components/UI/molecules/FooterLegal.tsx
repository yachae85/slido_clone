import styled from 'styled-components';

export const FooterLegal = () => {
  return (
    <Container>
      <LeftLegalWrapper>
        <span>© 2022 Cisco Systems, Inc. All rights reserved.</span>
        <div>
          <WebexIconWrapper>
            <WebexIcon src='/icons/ic_webex.svg' />
            <span>Slido is now part of Webex.</span>
          </WebexIconWrapper>
        </div>
      </LeftLegalWrapper>
      <RightLegalWrapper>
        <LegalLinkText>Privacy Settings</LegalLinkText>
        <LegalLinkText>Status Page</LegalLinkText>
      </RightLegalWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  grid-column-gap: 2rem;
  column-gap: 2rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
`;

const LeftLegalWrapper = styled.div`
  margin-bottom: 0;
  display: flex;
  align-items: center;
  color: #999;
  text-align: center;
`;

const WebexIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const WebexIcon = styled.img`
  margin: 0 1rem 0 2.5rem;
`;

const RightLegalWrapper = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-evenly;
  padding: 0;
  grid-column-gap: 3rem;
  column-gap: 3rem;

  list-style: none;
`;

const LegalLinkText = styled.li`
  margin: auto;
  white-space: nowrap;
  text-align: center;
  text-decoration: none;

  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: #39ac37;
  }
`;
