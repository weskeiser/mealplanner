import { IProducts } from '../../../Interfaces/Products';
import { FC, useState } from 'react';
import { getNutritionProps } from '../../Mealplan/Mealplans/Day/helpers/getDailyTotalNutrition';
import TableBody from './TableBody/TableBody';

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
  const [mode, setMode] = useState('standard');

  return (
    <>
      <table className={className + '__nutrition-list'}>
        <thead>
          <tr>
            <th>Næringsinnhold</th>
            <th>{totalServing}</th>
          </tr>
        </thead>

        <TableBody mode={mode} selectedProduct={selectedProduct} />
      </table>
      <div>
        <fieldset>
          <input type="radio" name="nutrition-list" />
          <input type="radio" name="nutrition-list" />
          <input type="radio" name="nutrition-list" />
        </fieldset>
      </div>
    </>
  );
};

export default NutritionList;
