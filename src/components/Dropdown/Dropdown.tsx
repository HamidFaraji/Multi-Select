import { FC, ReactNode, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import './Dropdown.css';

interface DropdownProps {
  children: ReactNode;
  toggler: ReactNode;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const Dropdown: FC<DropdownProps> = ({ children, toggler, open, onOpen, onClose }) => {
  const [dropdownContentTop, setDropdownContentTop] = useState(0);

  const togglerRef = useRef<HTMLDivElement>(null);

  const handleDropdownClick = useCallback((event: MouseEvent) => {
    event.stopPropagation();
    setDropdownContentTop((togglerRef.current?.offsetHeight || 0) + 4);
    onOpen();
  }, []);

  useEffect(() => {
    document.documentElement.addEventListener('click', onClose);

    return () => {
      document.documentElement.removeEventListener('click', onClose)
    }
  }, []);

  return (
    <div
      className={classNames('dropdown', {
        'dropdown--open': open,
      })}
      onClick={handleDropdownClick}
    >
      <div
        className="dropdown__toggler"
        ref={togglerRef}
      >
        {toggler}
      </div>
      <div
        className="dropdown__content"
        style={{
          top: dropdownContentTop,
        }}
      >
        {children}
      </div>
    </div>
  );
}
