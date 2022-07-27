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

export { MenuItem, Login, SignUp };
