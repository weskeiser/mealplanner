import { FC, useRef, useState } from 'react';

import * as Styled from './ListOptions.styled';

interface ListOptionsProps {
  listName: string;
  optionIndex: number;
  disabled?: boolean;
}

const ListOptions: FC<ListOptionsProps> = ({
  listName,
  optionIndex,
  disabled,
}) => {
  const trueIfFirstOption = optionIndex === 0 ? true : false;
  const [highlighted, setHighlighted] = useState(trueIfFirstOption);

  const checkboxInputRef = useRef<HTMLInputElement | undefined>();

  const highlightOption = () => {
    setHighlighted((highlighted) => !highlighted);
  };

  return (
    <Styled.Fieldset
      highlighted={highlighted}
      disabled={disabled}
      key={'select' + listName}
      name={listName}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          (checkboxInputRef.current as HTMLInputElement).checked = true;
          highlightOption();
        }
      }}
    >
      <input
        ref={checkboxInputRef}
        tabIndex={0}
        name="checkBoxInput"
        value={listName}
        id={'select' + listName}
        type="checkbox"
        onInput={() => highlightOption()}
        defaultChecked={trueIfFirstOption}
        disabled={disabled}
      />
      <label htmlFor={'select' + listName}>{listName}</label>
    </Styled.Fieldset>
  );
};

export default ListOptions;
