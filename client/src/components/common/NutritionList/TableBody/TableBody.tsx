import { FC } from 'react';
import { IProducts } from '../../../../Interfaces/Products';
import { getNutritionProps } from '../../../Mealplan/Mealplans/Day/helpers/getDailyTotalNutrition';

interface TableBodyProps {
  selectedProduct: IProducts | getNutritionProps;
}

const TableBody: FC<TableBodyProps> = ({ selectedProduct, mode }) => {
  const { properties } = selectedProduct;
  const { calories, macros, salt, fiber } = properties;
  const { fat, protein, carbs } = macros;
  const { total: fatTotal } = fat;
  const {
    total,
    sugar: { total: totalSugar },
  } = carbs;

  const nutritionData = [
    ['Kalorier', calories],
    ['Fett', fatTotal],
    ['Proteiner', protein],
    ['Karbohydrater', total],
    ['- Hvorav sukkerarter', totalSugar],
    ['Fiber', fiber],
    ['Salt', salt],
  ];

  return (
    <tbody>
      {nutritionData.map((dataPair) => {
        const key = dataPair[0];
        const value = dataPair[1];

        return (
          <tr key={dataPair + selectedProduct.id}>
            <td>{key}</td>
            <td>{key === 'Kalorier' ? value.toFixed(0) : value.toFixed(1)}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
