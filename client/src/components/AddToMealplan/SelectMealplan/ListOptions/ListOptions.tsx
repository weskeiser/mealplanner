import { FC, useRef, useState } from 'react';

interface IListOptions {
  className: string;
  listName: string;
  optionIndex: number;
  disabled?: boolean;
}

const ListOptions: FC<IListOptions> = ({
  listName,
  className,
  optionIndex,
  disabled,
}) => {
  const trueIfFirstOption = optionIndex === 0 ? true : false;
  const [highlighted, setHighlighted] = useState(trueIfFirstOption);

  const inputRef = useRef();

  const highlightOption = (e) => {
    setHighlighted((highlighted) => !highlighted);
  };

  return (
    <fieldset
      className={className + '__add-to-list__options__option'}
      key={'select' + listName}
      onFocus={(e) => console.log(e.target)}
      name={listName}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          inputRef.current.checked = true;
          highlightOption(e);
        }
      }}
    >
      <input
        ref={inputRef}
        tabIndex={0}
        name="checkBoxInput"
        value={listName}
        id={'select' + listName}
        type="checkbox"
        onInput={(e) => highlightOption(e)}
        defaultChecked={trueIfFirstOption}
        disabled={disabled}
      />
      <label
        className={highlighted ? 'selected' : ''}
        htmlFor={'select' + listName}
      >
        {listName}
      </label>
    </fieldset>
  );
};

export default ListOptions;
