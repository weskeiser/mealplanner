import { FC } from 'react';

import TableBody from '../../TableBody/TableBody';
import TableRow from '../../TableRow/TableRow';
import { nutrientsData } from '../hooks/useNutrientsMemo';

import * as Styled from './NutrientTable.styled';

interface NutrientTableProps {
  totalServingTitle: string;
  tableData: nutrientsData;
}

const NutrientTable: FC<NutrientTableProps> = ({
  totalServingTitle,
  tableData,
}) => {
  return (
    <Styled.NutrientTable>
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
    </Styled.NutrientTable>
  );
};

export default NutrientTable;
