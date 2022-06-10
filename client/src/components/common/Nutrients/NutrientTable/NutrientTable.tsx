import { FC, useMemo } from 'react';
import { IProducts } from '../../../../Interfaces/Products';
import { getNutritionProps } from '../../../Mealplan/Mealplans/Day/helpers/getDailyTotalNutrition';
import TableBody from '../../TableBody/TableBody';
import TableRow from '../../TableRow/TableRow';

interface NutrientTableProps {
  className: string;
  selectedProduct: IProducts | getNutritionProps;
  totalServingTitle: string;
  tableData: object;
}

const NutrientTable: FC<NutrientTableProps> = ({
  className,
  totalServingTitle,
  tableData,
}) => {
  return (
    <table className={className}>
      <thead>
        <tr>
          <th>{tableData.meta.title}</th>
          <th>{totalServingTitle}</th>
        </tr>
      </thead>

      <TableBody>
        {tableData.data.map((entry) => {
          const key = entry[0];
          const value = entry[1];

          const filteredValue = () => {
            if (typeof value === 'string') {
              return 'Ukjent';
            } else if (key === 'Kalorier') {
              return value.toFixed(0);
            } else return value.toFixed(1);
          };

          return (
            <TableRow key={key + value + tableData.meta.id}>
              <td>{key}</td>
              <td>{filteredValue()}</td>
            </TableRow>
          );
        })}
      </TableBody>
    </table>
  );
};

export default NutrientTable;
