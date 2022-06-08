import { IProducts } from '../../../Interfaces/Products';
import { FC, useRef, useState } from 'react';
import { getNutritionProps } from '../../Mealplan/Mealplans/Day/helpers/getDailyTotalNutrition';
import TableBody from './TableBody/TableBody';
import NutritionRadio from './NutritionRadio/NutritionRadio';
import NutritionTable from './NutritionTable/NutritionTable';

interface NutritionListProps {
  className: string;
  selectedProduct: IProducts | getNutritionProps;
  totalServing: string;
}

const NutritionList: FC<NutritionListProps> = ({
  className,
  selectedProduct,
  totalServing,
}) => {
  const radioFormRef = useRef<HTMLFormElement | undefined>();
  const [mode, setMode] = useState('standard');

  const replaceTable = (e) => {
    setMode(e.target.value);
  };

  return (
    <>
      <NutritionTable
        className={className}
        selectedProduct={selectedProduct}
        totalServing={totalServing}
        mode={mode}
      />
      <form
        ref={radioFormRef}
        className={className + '__nutrition-list__radio'}
        onInput={(e) => replaceTable(e)}
      >
        <NutritionRadio value="simple" />
        <NutritionRadio value="standard" defaultChecked={true} />
        <NutritionRadio value="vitamins" />
      </form>
    </>
  );
};

export default NutritionList;
