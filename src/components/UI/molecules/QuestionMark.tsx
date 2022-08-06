import { QuestionButton } from '../atoms/Button';
import { QuestionIcon } from '../atoms/Icon';

interface QuestionIconProps {
  setPopupVisible: (popupVisible: boolean) => void;
}

export const QuestionMark = (props: QuestionIconProps) => {
  const { setPopupVisible } = props;

  const onQuestionButtonClick = () => {
    setPopupVisible(true);
  };

  return (
    <QuestionButton onClick={onQuestionButtonClick}>
      <QuestionIcon />
    </QuestionButton>
  );
};
