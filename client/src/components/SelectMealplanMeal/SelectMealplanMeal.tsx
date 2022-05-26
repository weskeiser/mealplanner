import { FC, forwardRef } from 'react';

interface ISelectMealplanMeal {
  className: string;
}

const SelectMealplanMeal: FC<ISelectMealplanMeal> = forwardRef(
  ({ className }, selectMealplanMealRef) => {
    return (
      <>
        <button className={className + '__add-to-list__list-dropdown__add'}>
          &#65291;
        </button>
        <select
          ref={selectMealplanMealRef}
          name="list-dropdown"
          id="list-dropdown"
          className={className + '__add-to-list__list-dropdown'}
        >
          <option value="Måltid 1">Måltid 1</option>
        </select>
      </>
    );
  }
);

export default SelectMealplanMeal;
