import { useState } from 'react';
import { SubCategory } from '../../types/types';
import { MenuItem } from '../atoms/Text';
import { SubCategories } from './SubCategories';

interface HeaderMenuItemProps {
  marginLeft: boolean;
  hoverEffect: boolean;
  title: string;
  subCategories: SubCategory[];
}

export const HeaderMenuItem = (props: HeaderMenuItemProps) => {
  const [showSubCategories, setShowSubCategories] = useState(false);
  const { marginLeft, hoverEffect, subCategories, title } = props;

  const onMouseEnterEvent = () => {
    if (subCategories.length) {
      setShowSubCategories(true);
    }
  };

  const onMouseLeaveEvent = () => {
    if (subCategories.length) {
      setShowSubCategories(false);
    }
  };

  return (
    <MenuItem
      marginLeft={marginLeft}
      hoverEffect={hoverEffect}
      onMouseEnter={onMouseEnterEvent}
      onMouseLeave={onMouseLeaveEvent}
    >
      {title}
      {subCategories.length && (
        <SubCategories
          display={showSubCategories}
          subCategories={subCategories}
        />
      )}
    </MenuItem>
  );
};
