import { useState } from 'react';

import { HelpPopup } from './HelpPopup';
import { QuestionMark } from '../molecules/QuestionMark';

export default function QuestionPopup() {
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <>
      <QuestionMark setPopupVisible={setPopupVisible} />
      <HelpPopup visibility={popupVisible} setVisibility={setPopupVisible} />
    </>
  );
}
