import { forwardRef } from 'react';

interface IAddToListDropdown {
  className: string;
}

const AddToListDropdown = forwardRef(
  ({ className }: IAddToListDropdown, addToListDropdownRef) => {
    return (
      <select
        ref={addToListDropdownRef}
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

export default AddToListDropdown;
