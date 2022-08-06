import styled from 'styled-components';
import { SearchText } from '../atoms/Text';
import { PopupSearch } from './PopupSearch';
import { PrevIcon, CloseIcon } from '../atoms/Icon';

interface HelpPopupHeader {
  setVisibility: (visible: boolean) => void;
}

export const HelpPopupHeader = (props: HelpPopupHeader) => {
  const { setVisibility } = props;

  const onCloseIconClick = () => {
    setVisibility(false);
  };

  return (
    <Container>
      <TitleContainer>
        <PrevIcon />
        <SearchText>Search</SearchText>
        <CloseIcon onClick={onCloseIconClick} />
      </TitleContainer>
      <PopupSearch />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #39ac37;
  padding: 24px 24px 16px;
  color: #fff !important;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 24%);
  z-index: 2;
  height: 128px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  justify-content: center;
`;

const TitleContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;
