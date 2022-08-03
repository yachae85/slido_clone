import styled from 'styled-components';

export const PopupButton = styled.button`
  font-size: 0.875rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  border-radius: 0.25rem;
  border: 0.037rem solid #39ac37;
  color: #000;
  background-color: #fff;
  min-width: calc(calc(100% - 1.5rem) / 1.95);
  cursor: pointer;

  :hover {
    background-color: #000;
    color: #fff;
  }
`;
