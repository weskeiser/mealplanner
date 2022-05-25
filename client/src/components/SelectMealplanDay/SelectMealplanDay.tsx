import { FC, forwardRef } from 'react';

interface ISelectMealplanDay {
  className: string;
}

const SelectMealplanDay: FC<ISelectMealplanDay> = forwardRef(
  ({ className }, selectMealplanDayRef) => {
    return (
      <select
        ref={selectMealplanDayRef}
        name="list-dropdown"
        id="list-dropdown"
        className={className + '__add-to-list__list-dropdown'}
      >
        <option value="Mandag">Mandag</option>
        <option value="Tirsdag">Tirsdag</option>
      </select>
    );
  }
);

export default SelectMealplanDay;
