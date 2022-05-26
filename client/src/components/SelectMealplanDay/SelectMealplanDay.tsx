import { FC, MutableRefObject, useState } from 'react';
import SelectMealplan from '../SelectMealplan/SelectMealplan';

interface ISelectMealplanDay {
  className: string;
  selectMealplanDayRef: MutableRefObject<HTMLSelectElement | undefined>;
}

const SelectMealplanDay: FC<ISelectMealplanDay> = ({
  className,
  selectMealplanDayRef,
}) => {
  const [listNames, setListNames] = useState([
    'Mandag',
    'Tirsdag',
    'Onsdag',
    'Torsdag',
    'Fredag',
    'Lørdag',
    'Søndag',
  ]);
  // const [selectedListName, setSelectedListName] = useState('Mandag');

  return (
    <SelectMealplan
      className={className}
      listNames={listNames}
      setListNames={setListNames}
      ref={selectMealplanDayRef}
    />
  );
};

export default SelectMealplanDay;
