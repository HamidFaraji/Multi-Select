import { FC } from 'react';
import classNames from 'classnames';
import './Divider.css';

interface DividerProps {
  direction: 'vertical' | 'horizontal'
}

export const Divider: FC<DividerProps> = ({ direction }) => {
  return (
    <div
      className={classNames('divider', `divider--${direction}`)}
    />
  );
}
