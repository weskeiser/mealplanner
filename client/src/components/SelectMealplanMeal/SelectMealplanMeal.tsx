import { FC, MutableRefObject, useState } from 'react';
import SelectMealplan from '../SelectMealplan/SelectMealplan';

interface ISelectMealplanMeal {
  className: string;
  selectMealplanMealRef: MutableRefObject<HTMLSelectElement | undefined>;
}

const SelectMealplanMeal: FC<ISelectMealplanMeal> = ({
  className,
  selectMealplanMealRef,
}) => {
  const [listNames, setListNames] = useState([
    'Måltid 1',
    'Måltid 2',
    'Måltid 3',
    'Måltid 4',
  ]);
  // const [selectedListName, setSelectedListName] = useState('Mandag');

  return (
    <SelectMealplan
      className={className}
      listNames={listNames}
      setListNames={setListNames}
      ref={selectMealplanMealRef}
    />
  );
};

export default SelectMealplanMeal;

// import { FC, forwardRef } from 'react';

// interface ISelectMealplanMeal {
//   className: string;
// }

// const SelectMealplanMeal: FC<ISelectMealplanMeal> = forwardRef(
//   ({ className }, selectMealplanMealRef) => {
//     return (
//       <>
//         <div className={className + '__add-to-list__list-dropdown__add'}>
//           <input
//             type="text"
//             className={className + '__add-to-list__list-dropdown__add__input'}
//           />
//           <button
//             className={className + '__add-to-list__list-dropdown__add__button'}
//           >
//             &#65291;
//           </button>
//         </div>
//         <select
//           ref={selectMealplanMealRef}
//           name="list-dropdown"
//           id="list-dropdown"
//           className={className + '__add-to-list__list-dropdown'}
//         >
//           <option value="Måltid 1">Måltid 1</option>
//         </select>
//       </>
//     );
//   }
// );

// export default SelectMealplanMeal;
