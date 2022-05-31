import { forwardRef, useState } from 'react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

interface IListOptions {
  className: string;
  listName: string;
  optionIndex: number;
}

const ListOptions: ForwardRefExoticComponent<
  IListOptions & RefAttributes<HTMLSelectElement | undefined>
> = forwardRef<HTMLSelectElement | undefined, IListOptions>(
  ({ listName, className, optionIndex }, ref) => {
    const trueIfFirstOption = optionIndex === 0 ? true : false;
    const [highlighted, setHighlighted] = useState(trueIfFirstOption);

    const highlightOption = (e) => {
      setHighlighted((highlighted) => !highlighted);
    };

    return (
      <div
        ref={ref}
        className={
          highlighted
            ? className + '__add-to-list__options__option selected'
            : className + '__add-to-list__options__option'
        }
        key={'select' + listName}
      >
        <input
          name="checkBoxInput"
          value={listName}
          id={'select' + listName}
          type="checkbox"
          onInput={(e) => highlightOption(e)}
          defaultChecked={trueIfFirstOption}
        />
        <label htmlFor={'select' + listName}>{listName}</label>
      </div>
    );
  }
);

export default ListOptions;
