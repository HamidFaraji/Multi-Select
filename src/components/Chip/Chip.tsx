import { FC, MouseEventHandler } from 'react';
import classNames from 'classnames';
import { IconButton } from '@/components';
import type { IconNames } from '@/components';
import './Chip.css';

interface ChipProps {
  label: string;
  icon?: IconNames;
  onIconClick?: MouseEventHandler;
}

export const Chip: FC<ChipProps> = ({ label, icon = 'circle', onIconClick }) => {
  return (
    <span className="chip">
      <span className="chip__label">
        {label}
      </span>
      {(onIconClick || icon) && (
        <IconButton
          icon={icon}
          className={classNames('chip__remove', {
            'chip__remove--clickable': !!onIconClick,
          })}
          onClick={onIconClick}
        />
      )}
    </span>
  );
}
