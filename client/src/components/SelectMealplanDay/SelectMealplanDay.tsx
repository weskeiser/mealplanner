import { FC, forwardRef, useState } from 'react';

interface ISelectMealplanDay {
  className: string;
}

const SelectMealplanDay: FC<ISelectMealplanDay> = forwardRef(
  ({ className }, selectMealplanDayRef) => {
    const [listNames, setListNames] = useState(['Mandag', 'Tirsdag', 'Onsdag']);
    // const [selectedListName, setSelectedListName] = useState('Mandag');

    const listOptions = listNames.map((listName) => {
      // if (listName !== selectedListName) {
      return (
        <option
          value={listName}
          className={className + '__add-to-list__list-dropdown__option'}
        >
          {listName}
        </option>
      );
      // }
    });

    return (
      <>
        <button className={className + '__add-to-list__list-dropdown__add'}>
          &#65291;
        </button>
        <select
          ref={selectMealplanDayRef}
          name="list-dropdown"
          id="list-dropdown"
          className={className + '__add-to-list__list-dropdown'}
        >
          {listOptions}
        </select>
      </>
    );
  }
);

export default SelectMealplanDay;
