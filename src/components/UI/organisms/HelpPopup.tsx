import styled from 'styled-components';

import { HelpPopupMain } from './HelpPopupMain';
import { HelpPopupFooter } from '../molecules/HelpPopupFooter';

interface HelpPopupProps {
  visibility: boolean;
  setVisibility: (visible: boolean) => void;
}

export const HelpPopup = (props: HelpPopupProps) => {
  const { visibility, setVisibility } = props;
  return (
    <Container visibility={visibility}>
      <HelpPopupMain setVisibility={setVisibility} />
      <HelpPopupFooter setVisibility={setVisibility} />
    </Container>
  );
};

interface ContainerProps {
  visibility: boolean;
}

const Container = styled.div`
  display: ${(props: ContainerProps) => (props.visibility ? 'block' : 'none')};
`;
