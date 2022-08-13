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

export const MenuItem = styled(Text)`
  position: relative;
  padding: 0.5rem 0;
  line-height: 1.5rem;
  margin-left: ${(props: MenuItemProps) => (props.marginLeft ? '2rem' : '0px')};
`;

export const Login = styled(Text)`
  cursor: pointer;
`;

export const SignUp = styled(Text)`
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

export const PopupMainText = styled.div`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #000;
  margin-bottom: 1rem;
`;

export const PopupSubText = styled.div`
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

export const SearchText = styled.div`
  white-space: nowrap;
  line-height: 24px;
  font-size: 20px;
  color: #fff !important;
  font-weight: 400;
  text-align: center;
`;

interface SubTextProps {
  hover: boolean;
}

export const SubText = styled.div`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  line-height: 1.5rem;
  white-space: nowrap;

  cursor: pointer;

  background: ${(props: SubTextProps) => (props.hover ? '#f5f5f5' : 'none')};
`;

export const JoinText = styled.span`
  padding-right: 2rem;

  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
`;

interface EventDescribeProps {
  inputString: string;
}

export const EventDescribe = styled.p`
  opacity: ${(props: EventDescribeProps) => (props.inputString === '' ? 1 : 0)};

  position: absolute;
  top: 50%;
  left: calc(100% + 1rem);
  transform: translateY(-50%);
  margin-top: 1 0;
  width: 12rem;

  font-size: 0.85rem;
  line-height: 1.5rem;
  text-align: left;
  transition: opacity 0.1s;

  a {
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    text-decoration: underline;
    color: #39ac37;
    cursor: pointer;
  }
`;

export const HeaderTitle = styled.h1`
  margin-top: 0.5rem;

  font-size: 4rem;
  line-height: 4.5rem;
  font-weight: 700;
`;

export const HeaderSubTitle = styled.p`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;

  font-size: 1.25rem;
  line-height: 2rem;
`;

export const FreeButton = styled.a`
  display: inline-block;
  margin: 0.75rem 1rem;
  padding: 0.9375rem 2rem;
  width: auto;

  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background: #39ac37;

  border: 0.0625rem solid #39ac37;
  border-radius: 0.25rem;

  cursor: pointer;
  :hover {
    background-color: #000;
    border-color: #000;
  }
`;

export const DemoButton = styled.a`
  display: inline-block;
  margin: 0.75rem 1rem;
  padding: 0;
  width: auto;

  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  background: transparent;
  color: #39ac37;
  text-decoration: underline;

  border: none;

  cursor: pointer;
  :hover {
    text-decoration: none;
  }
`;

export const UtilLogoTitle = styled.h2`
  margin-bottom: 2rem;

  text-align: center;
  font-size: 1.25rem;
  line-height: 2rem;
`;

export const GreeTitle = styled.h2`
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 50rem;

  color: #fff;
  font-size: 3rem;
  line-height: 3.5rem;
  font-weight: 700;
`;
