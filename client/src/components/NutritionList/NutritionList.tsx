import { IProducts } from '../../Interfaces/Products';
import { FC } from 'react';
import { ItotalNutritionalValue } from '../Mealplanner/MealplanDay/MealplanMeal/ProductsAndNutrition/ProductsAndNutrition';

interface IListContent {
  className: string;
  selectedProduct: IProducts | ItotalNutritionalValue;
}

const NutritionList: FC<IListContent> = ({
  className,
  selectedProduct,
  servingTitle,
}) => {
  const { properties } = selectedProduct;
  const { serving, calories, salt, macros } = properties;
  const { fat, protein, carbs } = macros;
  const { total, sugars } = carbs;

  return (
    <table className={className}>
      <thead>
        <tr>
          <th>Næringsinnhold</th>
          <th>Get text from parent</th>
        </tr>
        {/* <tr>Næringsinnhold</tr>
        <tr>Pr. {serving}g</tr> */}
      </thead>

      <tbody>
        <tr>
          <td>Kalorier</td>
          <td>{+calories.toFixed()}</td>
        </tr>
        <tr>
          <td>Fett</td>
          <td>{+fat.toFixed(1)}</td>
        </tr>
        <tr>
          <td>Proteiner</td>
          <td>{+protein.toFixed(1)}</td>
        </tr>
        <tr>
          <td>Karbohydrater</td>
          <td>{+total.toFixed(1)}</td>
        </tr>
        <tr>
          <td>- Hvordav sukkerarter</td>
          <td>{+sugars.toFixed(1)}</td>
        </tr>
        <tr>
          <td>Salt</td>
          <td>{+salt.toFixed(1)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default NutritionList;
