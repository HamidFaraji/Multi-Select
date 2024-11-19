import { FC } from 'react';
import classNames from 'classnames';
import { Icon, IconNames } from '@/components';
import './List.css';

interface ListProps {
  label: string;
  selected?: boolean;
  leadingIcon?: IconNames;
  trailingIcon?: IconNames;
  onClick?: () => void;
}

export const List: FC<ListProps> = ({ label, selected, leadingIcon, trailingIcon, onClick }) => {
  return (
    <div
      className={classNames('list', {
        'list--selected': selected,
      })}
      onClick={() => onClick?.()}
    >
      {leadingIcon && (
        <span className="list__leading-icon">
          <Icon name={leadingIcon} />
        </span>
      )}
      <span className="list__label">
        {label}
      </span>
      {trailingIcon && (
        <span className="list__trailing-icon">
          <Icon name={trailingIcon} />
        </span>
      )}
    </div>
  );
}
