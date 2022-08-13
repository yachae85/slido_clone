import styled from 'styled-components';

const Logo = styled.img`
  width: 72px;
  height: 24px;
`;

const Container = styled.div`
  flex: 1;
`;

const LogoIMG = () => {
  return (
    <Container>
      <Logo src='/icons/ic_logo.svg' />
    </Container>
  );
};

const Cookie = styled.img`
  max-width: 5.5rem;
  height: auto;
  padding-right: 1rem;
`;

const Img = styled.img`
  cursor: pointer;
`;

const CookieIcon = () => {
  return <Cookie src='/icons/cookie.svg' />;
};

const QuestionIcon = () => {
  return <Img src='/icons/ic_question.svg' />;
};

const SearchIcon = () => {
  return <img alt='search' src='/icons/feature/ic_search.svg' />;
};

const PrevIcon = () => {
  return <Img src='/icons/feature/ic_prev.svg' />;
};

interface CloseIconProps {
  onClick: () => void;
}

const CloseIcon = (props: CloseIconProps) => {
  return <Img onClick={props.onClick} src='icons/feature/ic_close.svg' />;
};

const SubCategoryImg = styled.img`
  background-color: #eff9ef;
  border-radius: 100%;
`;

interface SubCategoryIconProps {
  src: string;
}

const SubCategoryIcon = (props: SubCategoryIconProps) => {
  return <SubCategoryImg src={props.src} />;
};

export {
  LogoIMG,
  CookieIcon,
  QuestionIcon,
  SearchIcon,
  PrevIcon,
  CloseIcon,
  SubCategoryIcon,
};
