import { useState } from 'react';
import styled from 'styled-components';
import { SubCategory } from '../../types/types';
import { SubCategoryIcon } from '../atoms/Icon';
import { SubText } from '../atoms/Text';

interface SubCategoriesProps {
  subCategories: SubCategory[];
}

export const SubCategories = (props: SubCategoriesProps) => {
  const { subCategories } = props;
  const [hoverIndex, setHoverIndex] = useState(0);

  const onMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  return (
    <Container paddingRight={subCategories[hoverIndex].icon !== ''}>
      <SubContainer>
        {subCategories.map((v, i) => {
          return (
            <SubText
              key={v.id}
              onMouseEnter={onMouseEnter.bind(this, i)}
              hover={hoverIndex === i}
            >
              {v.name}
            </SubText>
          );
        })}
      </SubContainer>
      {subCategories[hoverIndex].icon && (
        <TextContainer>
          <SubCategoryIcon src={subCategories[hoverIndex].icon} />
          <Title>{subCategories[hoverIndex].name}</Title>
          <Description>{subCategories[hoverIndex].description}</Description>
          <MoreText>Learn more</MoreText>
        </TextContainer>
      )}
    </Container>
  );
};

interface ContainerProps {
  paddingRight: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;

  position: absolute;
  left: 0;
  top: 2.5rem;
  box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 15%);
  border-radius: 0.25rem;
  background-color: #fff;
  z-index: 91;
  padding: 1.5rem 0;
  padding-right: ${(props: ContainerProps) =>
    props.paddingRight ? '20rem' : '0'};
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  position: absolute;
  top: 1.5rem;
  bottom: 1.5rem;
  right: 0;
  width: 20rem;
  padding: 0 2rem;
  border-left: 0.0625rem solid #f5f5f5;
  align-items: flex-start;
`;

const Title = styled.h4`
  margin: 0.5rem 0;

  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const MoreText = styled.a`
  font-weight: 700;
  padding: 0;
  border: none;
  background: transparent;
  color: #39ac37;
  text-decoration: underline;
  width: auto;
  cursor: pointer;

  :hover {
    text-decoration: none;
  }
`;
