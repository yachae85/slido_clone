import styled from 'styled-components';

interface FooterLinkProps {
  isStrong: boolean;
  title: string;
}

export const FooterLink = (props: FooterLinkProps) => {
  const { isStrong, title } = props;
  return <Container isStrong={isStrong}>{title}</Container>;
};

interface ContainerProps {
  isStrong: boolean;
}

const Container = styled.div`
  ${(props: ContainerProps) =>
    props.isStrong
      ? `
    margin-bottom: 1.5rem;
    margin-top: 0;

    font-size: 0.9375rem;
    line-height: 1.5rem;
    font-weight: 700;
  `
      : `
    margin-bottom: 0rem;
    margin-top: 1rem;

    font-size: 0.875rem;
    line-height: 1.5rem;
    font-weight: 400;

    cursor: pointer;

    :hover {
      text-decoration: underline;
      color: #39ac37;
    }
  `};
`;
