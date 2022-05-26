import { FC, forwardRef } from 'react';

interface ISelectMealplanDay {
  className: string;
}

const SelectMealplanDay: FC<ISelectMealplanDay> = forwardRef(
  ({ className }, selectMealplanDayRef) => {
    return (
      <>
        <div
          ref={selectMealplanDayRef}
          name="list-dropdown"
          id="list-dropdown"
          className={className + '__add-to-list__list-dropdown'}
        ></div>
        <div value="Mandag">Mandag</div>
        <div value="Tirsdag">Tirsdag</div>
      </>
    );
  }
);

export default SelectMealplanDay;
