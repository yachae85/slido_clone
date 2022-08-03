import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CookieIcon } from '../atoms/Icon';
import { PopupMainText, PopupSubText } from '../atoms/Text';

import { CookieButtons } from '../molecules/CookieButtons';

export default function CookiePopup() {
  const [visible, setVisible] = useState(false);

  const initialVisibleValue = () => {
    const temp = window.localStorage.getItem('cookie-popup');
    const value: boolean = JSON.parse(temp ? temp : 'true');

    if (value) {
      setVisible(value);
    }
  };

  useEffect(initialVisibleValue, []);

  return (
    <Container visible={visible}>
      <SubContainer>
        <CookieIcon />
        <TextContainer>
          <PopupMainText>Your privacy matters.</PopupMainText>
          <PopupSubText>
            We use {<span>cookies</span>} to improve your experience, analyze
            traffic, and serve personalized ads. {<span>Privacy settings</span>}
            .
          </PopupSubText>
        </TextContainer>
      </SubContainer>
      <CookieButtons setVisible={setVisible} />
    </Container>
  );
}

interface CookiePopupProps {
  visible: boolean;
}

const Container = styled.div`
  display: ${(props: CookiePopupProps) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  bottom: 1rem;
  right: 6.75rem;

  width: calc(100% - 1.5rem);
  max-width: 27.5rem;

  padding: 2rem;
  box-shadow: 0 0.25rem 0.7rem rgb(0 0 0 / 10%);
  border-radius: 0.25rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
