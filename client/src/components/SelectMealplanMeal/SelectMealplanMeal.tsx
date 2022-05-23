import { forwardRef } from 'react';

interface ISelectMealplanMeal {
  className: string;
}

const SelectMealplanMeal = forwardRef(
  ({ className }: ISelectMealplanMeal, chooseMealRef) => {
    return (
      <select
        ref={chooseMealRef}
        name="list-dropdown"
        id="list-dropdown"
        className={className + '__add-to-list__list-dropdown'}
      >
        <option value="Måltid 1">Måltid 1</option>
      </select>
    );
  }
);

export default SelectMealplanMeal;
