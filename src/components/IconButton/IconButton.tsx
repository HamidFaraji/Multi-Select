import { FC, MouseEventHandler } from 'react';
import classNames from 'classnames';
import { Icon, IconNames } from '@/components';

interface IconButtonProps {
  className?: string;
  icon: IconNames;
  iconSize?: number;
  onClick?: MouseEventHandler;
}

export const IconButton: FC<IconButtonProps> = ({ className, icon, iconSize = 24, onClick }) => {
  return (
    <button
      className={classNames('icon-button', className)}
      onClick={onClick}
    >
      <Icon name={icon} size={iconSize} />
    </button>
  );
}
