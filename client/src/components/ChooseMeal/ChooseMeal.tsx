import { forwardRef } from 'react';

interface IChooseMeal {
  className: string;
}

const ChooseMeal = forwardRef(({ className }: IChooseMeal, chooseMealRef) => {
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
});

export default ChooseMeal;
