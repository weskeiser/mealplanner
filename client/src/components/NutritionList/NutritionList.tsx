import { IProducts } from '../../Interfaces/Products';
import { FC } from 'react';
import { getNutritionProps } from '../Mealplan/Mealplans/Day/helpers/getDailyTotalNutrition';
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
  return (
    <table className={className + '__nutrition-list'}>
      <thead>
        <tr>
          <th>Næringsinnhold</th>
          <th>{totalServing}</th>
        </tr>
      </thead>

      <TableBody selectedProduct={selectedProduct} />
    </table>
  );
};

export default NutritionList;
