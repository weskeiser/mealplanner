import { FC } from 'react';
import { IProducts } from '../../../Interfaces/Products';
import { getNutritionProps } from '../../Mealplan/Mealplans/Day/helpers/getDailyTotalNutrition';

interface TableBodyProps {
  selectedProduct: IProducts | getNutritionProps;
}

const TableBody: FC<TableBodyProps> = ({ selectedProduct }) => {
  const { properties } = selectedProduct;
  const { calories, salt, macros } = properties;
  const { fat, protein, carbs } = macros;
  const { total, sugars } = carbs;

  const tableData = [
    ['Kalorier', calories],
    ['Fett', fat],
    ['Proteiner', protein],
    ['Karbohydrater', total],
    ['- Hvorav sukkerarter', sugars],
    ['Salt', salt],
  ];

  return (
    <tbody>
      {tableData.map((dataPair) => (
        <tr key={dataPair + selectedProduct.id}>
          <td>{dataPair[0]}</td>
          <td>{dataPair[1].toFixed()}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
