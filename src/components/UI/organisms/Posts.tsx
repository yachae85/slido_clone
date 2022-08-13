import styled from 'styled-components';
import useSWR from 'swr';
import mockFetcher from '../../../fetcher/mockFetcher';
import { Post } from '../molecules/Post';

interface PostType {
  id: number;
  title: string;
  href: string;
  thumbnail: string;
}

export default function Posts() {
  const { data } = useSWR('/posts.json', mockFetcher);

  return (
    <Container>
      <TextWrapper>
        <PostTitle>Get inspired on how to use Slido</PostTitle>
        <PostWrapper>
          {data?.result.map((v: PostType) => {
            return (
              <Post title={v.title} href={v.href} thumbnail={v.thumbnail} />
            );
          })}
        </PostWrapper>
      </TextWrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f5f5f5;
  width: 100%;
`;

const TextWrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5rem;
  padding-bottom: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 80rem;
`;

const PostTitle = styled.h2`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  max-width: 60rem;

  text-align: center;
  font-size: 2.375rem;
  line-height: 3rem;
  font-weight: 700;
`;

const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26%, 1fr));
  grid-column-gap: 2.6315789474%;
`;
