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

export const QuestionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  transition: box-shadow 0.3s ease;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: #39ac37;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  box-shadow: 0 0.125rem 0.375rem rgb(0 0 0 / 28%);
  z-index: 96;
  cursor: pointer;
`;

export const HelpPopupFooterButton = styled.button`
  border: none;
  background: none;
  font-size: 0.875rem;
  line-height: 1.05rem;
  padding: 0.85rem;
  text-align: center;
  color: #fff;
  width: 100%;
  cursor: pointer;

  span {
    text-decoration: underline;
  }
`;

export const TryButton = styled.a`
  margin-top: 1rem;
  padding: 0.9375rem 2rem;
  width: auto;

  color: #000;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  text-align: center;

  border-radius: 0.25rem;
  border: 0.0625rem solid #39ac37;
  border-color: #fff;
  background: #fff;

  cursor: pointer;
  :hover {
    color: #fff;

    background-color: #000;
    border-color: #000;
  }
`;
