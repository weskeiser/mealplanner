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

  const checkboxInputRef = useRef<HTMLInputElement | undefined>();

  const highlightOption = () => {
    setHighlighted((highlighted) => !highlighted);
  };

  return (
    <fieldset
      className={className + '__add-to-list__options__option'}
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
