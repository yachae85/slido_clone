import styled from 'styled-components';
import { MoreText } from '../atoms/Text';

interface PostProps {
  title: string;
  href: string;
  thumbnail: string;
}
export const Post = (props: PostProps) => {
  const { title, href, thumbnail } = props;

  const onPostImgClick = () => {
    window.location.href = href;
  };

  return (
    <Container>
      <PostImg onClick={onPostImgClick} src={thumbnail} />
      <PostTitle>{title}</PostTitle>
      <MoreText>Learn more</MoreText>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  margin-bottom: 2rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
`;

const PostImg = styled.img`
  cursor: pointer;
`;

const PostTitle = styled.a`
  margin-top: 1rem;
  padding: 0;

  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 700;
  color: inherit;
  text-decoration: none;
  text-align: left;

  background-color: transparent;
  border: 0;

  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
