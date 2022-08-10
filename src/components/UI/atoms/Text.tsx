import styled from 'styled-components';

interface TextProps {
  hoverEffect?: boolean;
}

interface MenuItemProps extends TextProps {
  marginLeft: boolean;
}

const Text = styled.div`
  font-size: 1rem;
  font-weight: 400;

  :hover {
    color: ${(props: TextProps) => (props.hoverEffect ? '#39ac37' : '#000')};
    text-decoration: ${(props: TextProps) =>
      props.hoverEffect ? 'underline' : 'none'};
  }

  cursor: ${(props: TextProps) => (props.hoverEffect ? 'pointer' : 'default')};
`;

const MenuItem = styled(Text)`
  position: relative;
  margin-left: ${(props: MenuItemProps) => (props.marginLeft ? '2rem' : '0px')};
`;

const Login = styled(Text)`
  cursor: pointer;
`;

const SignUp = styled(Text)`
  margin-left: 2rem;
  padding: 0.9375rem 2rem;

  font-weight: 700;
  color: #fff;
  background-color: #39ac37;
  border-radius: 0.25rem;

  cursor: pointer;

  :hover {
    color: #fff;
    background-color: #000;
  }
`;

const PopupMainText = styled.div`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #000;
  margin-bottom: 1rem;
`;

const PopupSubText = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #000;
  margin: 0;

  span {
    color: #39ac37;
    cursor: pointer;
    text-decoration: underline;

    :hover {
      text-decoration: none;
    }
  }
`;

const SearchText = styled.div`
  white-space: nowrap;
  line-height: 24px;
  font-size: 20px;
  color: #fff !important;
  font-weight: 400;
  text-align: center;
`;

const SubText = styled.div`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  line-height: 1.5rem;
  white-space: nowrap;

  cursor: pointer;
`;

export {
  MenuItem,
  Login,
  SignUp,
  PopupMainText,
  PopupSubText,
  SearchText,
  SubText,
};
