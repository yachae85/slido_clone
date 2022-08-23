import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import mockFetcher from '../../../fetcher/mockFetcher';

interface MainData {
  id: number;
  title: string;
  description: string;
  icon: string;
  video: string;
}

export default function MainFeatures() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { data } = useSWR('/main-features.json', mockFetcher);

  const onButtonClick = (i: number) => {
    setSelectedIndex(i);
  };

  return (
    <Container>
      <AccordionWrapper>
        <AccordionVideo>
          {data?.result.map((v: MainData, i: number) => {
            return (
              <AccodionItem key={v.id}>
                <AccordionTextWrapper>
                  <AccordionText onClick={() => onButtonClick(i)}>
                    <AccodionIcon src={v.icon} />
                    {v.title}
                    <ArrowDown
                      src='/icons/ic_arrow_down.svg'
                      selected={selectedIndex === i}
                    />
                  </AccordionText>
                </AccordionTextWrapper>
                <AccordionDescription visible={selectedIndex === i}>
                  {v.description}
                </AccordionDescription>
                <AccodionVideo
                  selected={selectedIndex === i}
                  src={v.video}
                  autoPlay
                  loop
                  playsInline
                ></AccodionVideo>
              </AccodionItem>
            );
          })}
        </AccordionVideo>
      </AccordionWrapper>
    </Container>
  );
}

const Container = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  position: relative;
  width: 100%;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
`;

const AccordionWrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const AccodionItem = styled.div`
  padding: 2rem;
  border-bottom: 1px solid #f5f5f5;
  box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 15%);
  border-radius: 0.25rem;
`;

const AccordionTextWrapper = styled.h3`
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const AccordionText = styled.button`
  margin-bottom: 0.75rem;
  position: relative;
  cursor: pointer;
  padding-right: 2rem;
  margin: 0;
  border: none;
  background: transparent;
  text-align: left;
  padding: 0;
  width: 100%;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
`;

interface ArrowDownProps {
  selected: boolean;
}

const ArrowDown = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  transform: ${(props: ArrowDownProps) =>
    props.selected ? 'translateY(-50%) rotate(180deg);' : 'none'};
  transition: transform 0.3s;
`;

interface AccordionDescriptionProps {
  visible: boolean;
}

const AccordionDescription = styled.div`
  visibility: ${(props: AccordionDescriptionProps) =>
    props.visible ? 'visible' : 'hidden'};
  max-height: ${(props: AccordionDescriptionProps) =>
    props.visible ? '140px' : '0px !important'};
  transition-property: max-height;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0, 0, 0.16, 0.96);

  font-size: 1.125rem;
  line-height: 1.75rem;
`;

const AccordionVideo = styled.div`
  padding-right: 2rem;
  padding-left: 60%;
  position: relative;
`;

const AccodionIcon = styled.img`
  margin-right: 1rem;
`;

interface AccordionVideoProps {
  selected: boolean;
}

const AccodionVideo = styled.video`
  margin: 0;
  opacity: ${(props: AccordionVideoProps) => (props.selected ? '1' : '0')};
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 50%;
`;
