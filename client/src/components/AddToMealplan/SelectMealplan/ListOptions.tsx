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
        className={className + '__add-to-list__options__option'}
        key={'select' + listName}
        // onFocus={(e) => (e.target.style.border = '1px solid #000')}
        // onFocus={(e) => console.log(e.target.style.border)}
        tabIndex={0}
        onKeyDown={(e) => console.log(ref.current.children)}
      >
        <input
          tabIndex={0}
          name="checkBoxInput"
          value={listName}
          id={'select' + listName}
          type="checkbox"
          onInput={(e) => highlightOption(e)}
          defaultChecked={trueIfFirstOption}
        />
        <label
          className={highlighted ? 'selected' : ''}
          htmlFor={'select' + listName}
        >
          {listName}
        </label>
      </div>
    );
  }
);

export default ListOptions;