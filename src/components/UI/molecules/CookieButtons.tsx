import styled from 'styled-components';
import { PopupButton } from '../atoms/Button';

interface CookieButtonsProps {
  setVisible: (visible: boolean) => void;
}

export function CookieButtons(props: CookieButtonsProps) {
  const { setVisible } = props;

  const onPopupButtonClick = () => {
    setVisible(false);
    window.localStorage.setItem('cookie-popup', 'false');
  };

  return (
    <Container>
      <PopupButton onClick={onPopupButtonClick}>Reject all</PopupButton>
      <PopupButton onClick={onPopupButtonClick}>Allow all</PopupButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  justify-content: space-between;
`;
