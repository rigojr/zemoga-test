import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import './styles.scss';

export interface IDropdownProps {
  setOptionSelected: (option: string) => void;
  optionSelected: string;
  availableOptions: string[];
}

const Dropdown: React.FC<IDropdownProps> = ({ setOptionSelected, optionSelected, availableOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onInnerOptionsHandler = () => {
    setIsOpen(prev => !prev);
  };

  const onHandlerOptionSelected = (option: string) => {
    setOptionSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-container__option-selected" onClick={onInnerOptionsHandler}>
        <p>{optionSelected}</p>
        <AiFillCaretDown size="1.5em" />
      </div>
      {isOpen && (
        <div className="dropdown-container__inner-options">
          {availableOptions.map(option => (
            <p key={option} onClick={onHandlerOptionSelected.bind({}, option)}>
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
