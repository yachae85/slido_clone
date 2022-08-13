import styled from 'styled-components';

const Logo = styled.img`
  width: 72px;
  height: 24px;
`;

const Container = styled.div`
  flex: 1;
`;

export const LogoIMG = () => {
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

export const CookieIcon = () => {
  return <Cookie src='/icons/cookie.svg' />;
};

export const QuestionIcon = () => {
  return <Img src='/icons/ic_question.svg' />;
};

export const SearchIcon = () => {
  return <img alt='search' src='/icons/feature/ic_search.svg' />;
};

export const PrevIcon = () => {
  return <Img src='/icons/feature/ic_prev.svg' />;
};

interface CloseIconProps {
  onClick: () => void;
}

export const CloseIcon = (props: CloseIconProps) => {
  return <Img onClick={props.onClick} src='icons/feature/ic_close.svg' />;
};

const SubCategoryImg = styled.img`
  background-color: #eff9ef;
  border-radius: 100%;
`;

interface SubCategoryIconProps {
  src: string;
}

export const SubCategoryIcon = (props: SubCategoryIconProps) => {
  return <SubCategoryImg src={props.src} />;
};

export const SearchFormIcon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &.hash {
    left: 1rem;
  }

  &.next {
    right: 0.5rem;
  }
`;

interface IconProps {
  src: string;
  marginLeft?: string;
}

export const Icon = ({ src, marginLeft }: IconProps) => {
  return (
    <img alt={src} src={src} style={{ marginLeft: marginLeft ?? '0px' }} />
  );
};
