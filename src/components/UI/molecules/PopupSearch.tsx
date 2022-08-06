import styled from 'styled-components';
import { SearchIcon } from '../atoms/Icon';

export const PopupSearch = () => {
  return (
    <Container>
      <Input placeholder='Search' />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Input = styled.input`
  font-size: 14px;
  width: 100%;
  margin: 0;
  border: none;
  border-radius: 4px;
  padding: 16px 40px;
  outline: none;
`;

const IconButton = styled.div`
  position: absolute;
  top: 16px;
  left: 7px;
  margin: 0;
  padding: 0 9px;
  outline: none;
`;
