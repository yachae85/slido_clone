import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import mockFetcher from '../../../fetcher/mockFetcher';

interface ReviewData {
  id: number;
  company: string;
  companyLogo: string;
  staff: string;
  staffPhoto: string;
  comment: string;
}

export default function Slider() {
  const { data } = useSWR('/customers.json', mockFetcher);
  const [index, setIndex] = useState(1);
  const length = data?.reviewList.length;

  useEffect(() => {
    if (index === 0) {
      setIndex(3);
    }

    if (index === 4) {
      setIndex(1);
    }
  }, [index]);

  const onLeftButtonClick = () => {
    setIndex(index - 1);
  };

  const onRightButtonClick = () => {
    setIndex(index + 1);
  };

  return (
    <Container>
      <Title>Trusted by 860K customers worldwide</Title>
      <SliderContainer>
        <SliderWrapper index={index * -1072}>
          <SliderItem>
            <SliderImg src={data?.reviewList[length - 1].staffPhoto} />
            <SliderTextContianer>
              <SliderTextIcon src={data?.reviewList[length - 1].companyLogo} />
              <SliderText>{data?.reviewList[length - 1].comment}</SliderText>
              <SliderStaffInfo>
                {data?.reviewList[length - 1].staff}
              </SliderStaffInfo>
            </SliderTextContianer>
          </SliderItem>
          {data?.reviewList.map((v: ReviewData) => {
            return (
              <SliderItem key={v.id}>
                <SliderImg src={v.staffPhoto} />
                <SliderTextContianer>
                  <SliderTextIcon src={v.companyLogo} />
                  <SliderText>{v.comment}</SliderText>
                  <SliderStaffInfo>{v.staff}</SliderStaffInfo>
                </SliderTextContianer>
              </SliderItem>
            );
          })}
          <SliderItem>
            <SliderImg src={data?.reviewList[0].staffPhoto} />
            <SliderTextContianer>
              <SliderTextIcon src={data?.reviewList[0].companyLogo} />
              <SliderText>{data?.reviewList[0].comment}</SliderText>
              <SliderStaffInfo>{data?.reviewList[0].staff}</SliderStaffInfo>
            </SliderTextContianer>
          </SliderItem>
        </SliderWrapper>
      </SliderContainer>
      <ButtonContainer>
        <Button onClick={onLeftButtonClick}>
          <ButtonImg src='/icons/ic_left.svg' />
        </Button>
        <PageText>{`${index} / ${length}`}</PageText>
        <Button onClick={onRightButtonClick}>
          <ButtonImg src='/icons/ic_right.svg' />
        </Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 5rem 6.5rem;
  position: relative;
  width: 100%;
  max-width: 80rem;
`;

const Title = styled.h2`
  margin: 0;

  text-align: center;
  font-size: 3rem;
  line-height: 3.5rem;
  font-weight: 700;
`;

const SliderContainer = styled.div`
  padding-top: 3rem;
  width: 100%;
  touch-action: pan-y;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
`;

interface SliderWrapperProps {
  index: number;
}

const SliderWrapper = styled.div`
  transform: translate3d(
    ${(props: SliderWrapperProps) => `${props.index}px`},
    0px,
    0px
  );
  transition-duration: 300ms;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
`;

const SliderItem = styled.div`
  margin-right: 32px;
  transform: translateZ(0);
  backface-visibility: hidden;
  grid-template-columns: 1fr 24rem;
  column-gap: 10%;
  display: grid;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
`;

const SliderTextContianer = styled.div`
  margin-top: 0;
  padding-bottom: 8rem;
`;

const SliderTextIcon = styled.img`
  box-sizing: border-box;
  display: block;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0;
  margin: 0;
  padding: 0;
  max-width: 100%;
`;

const SliderText = styled.div`
  margin-top: 1.5rem;
  font-size: 1.75rem;
  line-height: 2.5rem;

  ::before {
    content: open-quote;
  }
  ::after {
    content: close-quote;
  }
`;

const SliderStaffInfo = styled.div`
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const SliderImg = styled.img`
  order: 2;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0;
  margin: 0;
  padding: 0;
  position: relative;
  max-width: 100%;
`;

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 92;
  bottom: 7.5rem;
  left: 6.5rem;
`;

const Button = styled.button`
  display: flex;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

const ButtonImg = styled.img``;

const PageText = styled.div`
  display: flex;
  margin: 0 1rem;
  font-weight: 700;
`;
