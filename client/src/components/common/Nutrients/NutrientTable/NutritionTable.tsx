import { FC, useMemo } from 'react';
import { IProducts } from '../../../../Interfaces/Products';
import { getNutritionProps } from '../../../Mealplan/Mealplans/Day/helpers/getDailyTotalNutrition';
import TableBody from '../../TableBody/TableBody';
import TableRow from '../../TableRow/TableRow';

interface NutritionTableProps {
  className: string;
  selectedProduct: IProducts | getNutritionProps;
  totalServingTitle: string;
  tableData: object;
}

const NutritionTable: FC<NutritionTableProps> = ({
  className,
  totalServingTitle,
  tableData,
}) => {
  const tableDataKeys = useMemo(() => {
    return Object.keys(tableData);
  }, [tableData]);

  return (
    <table className={className + '__nutrition-list'}>
      <thead>
        <tr>
          <th>{tableData.title}</th>
          <th>{totalServingTitle}</th>
        </tr>
      </thead>

      <TableBody tableData={tableData}>
        {tableDataKeys.slice(0, tableDataKeys.length - 3).map((key, index) => {
          const value = Object.values(tableData)[index];
          const filteredValue = () => {
            if (typeof value === 'string') {
              return 'Ukjent';
            } else if (key === 'Kalorier') {
              return value.toFixed(0);
            } else return value.toFixed(1);
          };
          return (
            <TableRow key={key + value + tableData.id}>
              <td>{key}</td>
              <td>{filteredValue()}</td>
            </TableRow>
          );
        })}
      </TableBody>
    </table>
  );
};

export default NutritionTable;
