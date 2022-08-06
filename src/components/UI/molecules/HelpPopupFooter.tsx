import styled from 'styled-components';

import { HelpPopupFooterButton } from '../atoms/Button';

interface HelpPopupProps {
  setVisibility: (visible: boolean) => void;
}

export const HelpPopupFooter = (props: HelpPopupProps) => {
  const { setVisibility } = props;

  const onPopupFooterClick = () => {
    setVisibility(false);
  };

  return (
    <Container>
      <HelpPopupFooterButton onClick={onPopupFooterClick}>
        Didn`t find an answer? <span>Chat with us</span>
      </HelpPopupFooterButton>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 25rem;
  background-color: #43bbc1;
  color: #fff;
  z-index: 97;
  overflow: hidden;
  box-sizing: border-box;
  transition-property: right, max-height;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
  border-radius: 0 0 0.5rem 0.5rem;
  border: 0;
  padding: 0;
  opacity: 1;
  bottom: 1rem;
  right: 1rem;
  max-height: 2.75rem;
`;
