import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import { Chip, Divider, Dropdown, IconButton, List } from '@/components';
import './MultiSelect.css';

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: Option[];
  placeholder?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({ placeholder, options }) => {
  const [inputValue, setInputValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Option[]>([]);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);

  const handleItemAdd = useCallback(() => {
    const isExistInOptions = options.some(option => option.label === inputValue);
    const isExistInSelectedItems = selectedItems.some(option => option.label === inputValue);

    if (!isExistInOptions && !isExistInSelectedItems) {
      setSelectedItems((prevItems) => {
        const newItem: Option = {
          value: inputValue,
          label: inputValue
        };

        return [...prevItems, newItem];
      });
      setInputValue('');
      setFilteredOptions(options);
      setIsDropdownOpen(false);
    }
  }, [selectedItems, inputValue, options]);

  const handleItemSelect = useCallback((item: Option) => {
    setSelectedItems((prevItems) => {
      return prevItems.includes(item) ? selectedItems : [...selectedItems, item];
    });
    setInputValue('');
  }, [selectedItems]);

  const handleItemRemove = useCallback((item: Option) => {
    setSelectedItems((prevItems) => {
      return prevItems.filter(selectedItem => selectedItem.value !== item.label);
    });
  }, []);

  const handleRemoveLastItem = useCallback(() => {
    setSelectedItems((prevItems) => {
      return prevItems.slice(0, -1)
    });
  }, []);

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setInputValue(value);
    setFilteredOptions(options.filter(option => option.label.toLowerCase().includes(value.toLowerCase())));
  }, [options]);

  const handleInputKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'Enter':
        handleItemAdd();
        break;
      case 'Backspace':
        if (inputValue.trim().length === 0) {
          handleRemoveLastItem();
        }
        break;
    }
  }, [selectedItems, inputValue, options]);

  const handleResetButtonClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedItems([]);
  }, []);

  return (
    <div
      className={classNames('multi-select', {
        'multi-select--focused': isDropdownOpen,
      })}
    >
      <Dropdown
        open={isDropdownOpen}
        toggler={(
          <div className="multi-select__box">
            {selectedItems.map((item) => (
              <Chip
                key={item.value}
                icon="close"
                label={item.label}
                onIconClick={(event) => {
                  event.stopPropagation();
                  handleItemRemove(item);
                }}
              />
            ))}
            <input
              type="text"
              placeholder={placeholder}
              className="multi-select__input"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
            />
            <div className="multi-select__actions">
              <IconButton
                icon="close"
                onClick={handleResetButtonClick}
              />
              <Divider direction="vertical" />
              <IconButton
                icon="chevron-down"
              />
            </div>
          </div>
        )}
        onOpen={() => setIsDropdownOpen(true)}
        onClose={() => setIsDropdownOpen(false)}
      >
        {filteredOptions.length > 0 ? (filteredOptions.map((option) => (
          <List
            key={option.value}
            label={option.label}
            onClick={() => handleItemSelect(option)}
          />
        ))) : (
          <List
            label={`Create "${inputValue}"`}
            onClick={() => handleItemAdd()}
          />
        )}
      </Dropdown>
    </div>
  );
};
