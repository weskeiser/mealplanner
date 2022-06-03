import { IProducts } from '../../Interfaces/Products';
import { FC } from 'react';
import { IgetDailyTotalNutrition } from '../Mealplan/Mealplans/Day/getDailyTotalNutrition';

interface IListContent {
  className: string;
  selectedProduct: IProducts | IgetDailyTotalNutrition;
  totalServing: string;
}

const NutritionList: FC<IListContent> = ({
  className,
  selectedProduct,
  totalServing,
}) => {
  const { properties } = selectedProduct;
  const { calories, salt, macros } = properties;
  const { fat, protein, carbs } = macros;
  const { total, sugars } = carbs;

  return (
    <table className={className + '__nutrition-list'}>
      <thead>
        <tr>
          <th>Næringsinnhold</th>
          <th>{totalServing}</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Kalorier</td>
          <td>{parseInt(calories).toFixed()}</td>
        </tr>
        <tr>
          <td>Fett</td>
          <td>{parseInt(fat).toFixed(1)}</td>
        </tr>
        <tr>
          <td>Proteiner</td>
          <td>{parseInt(protein).toFixed(1)}</td>
        </tr>
        <tr>
          <td>Karbohydrater</td>
          <td>{parseInt(total).toFixed(1)}</td>
        </tr>
        <tr>
          <td>- Hvordav sukkerarter</td>
          <td>{parseInt(sugars).toFixed(1)}</td>
        </tr>
        <tr>
          <td>Salt</td>
          <td>{parseInt(salt).toFixed(1)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default NutritionList;
