import { FC } from 'react';
import './Icon.css';

export type IconNames = 'chevron-down' | 'chevron-up' | 'close' | 'circle';

interface IconProps {
  size?: number;
  name: IconNames;
}

export const Icon: FC<IconProps> = ({ name, size = 24 }) => {
  return (
    <span
      className={`icon-${name}`}
      style={{
        fontSize: size,
      }}
    />
  );
}
