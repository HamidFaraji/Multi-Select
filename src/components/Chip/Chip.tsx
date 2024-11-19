import { FC } from 'react';
import { Icon } from '@/components';
import type { IconNames } from '@/components';
import classNames from 'classnames';
import './Chip.css';

interface ChipProps {
  label: string;
  icon?: IconNames;
  onIconClick?: () => void;
}

export const Chip: FC<ChipProps> = ({ label, icon = 'circle', onIconClick }) => {
  return (
    <span className="chip">
      <span className="chip__label">
        {label}
      </span>
      {(onIconClick || icon) && (
        <button
          className={classNames('chip__remove', {
            'chip__remove--clickable': !!onIconClick,
          })}
          onClick={() => onIconClick?.()}
        >
          <Icon name={icon} size={18} />
        </button>
      )}
    </span>
  );
}
