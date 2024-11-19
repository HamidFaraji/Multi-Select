import { FC, ReactNode, useCallback, useRef, useState } from 'react';
import classNames from 'classnames';
import './Dropdown.css';

interface DropdownProps {
  taoggler: ReactNode;
  children: ReactNode;
}

export const Dropdown: FC<DropdownProps> = ({ taoggler, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownContentTop, setDropdownContentTop] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const togglerRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = useCallback((open: boolean) => {
    setDropdownContentTop((togglerRef.current?.offsetHeight || 0) + 4);
    setIsOpen(open);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={classNames('dropdown', {
        'dropdown--open': isOpen,
      })}
    >
      <div
        className="dropdown__toggler"
        ref={togglerRef}
        onClick={() => handleDropdownToggle(true)}
      >
        {taoggler}
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
