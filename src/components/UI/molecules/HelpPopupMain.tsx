import styled from 'styled-components';
import { HelpPopupHeader } from './HelpPopupHeader';

interface HelpPopupMainProps {
  setVisibility: (visible: boolean) => void;
}

export const HelpPopupMain = (props: HelpPopupMainProps) => {
  const { setVisibility } = props;

  return (
    <Container>
      <HelpPopupHeader setVisibility={setVisibility} />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 400px;
  max-height: 45rem;
  background: #fff;
  overflow: hidden;
  z-index: 999999;
  box-sizing: border-box;
  transition: all 0.2s ease-out;
  border-radius: 8px;
  border: 0;
  padding: 0;
  opacity: 1;
  box-shadow: 0 5px 25px 0 rgb(0 0 0 / 24%);
  bottom: 3.75rem !important;
  height: calc(100% - 3.75rem - 5rem - 1.25rem);
  border-radius: 0.5rem 0.5rem 0 0;
  right: 1rem;
`;
