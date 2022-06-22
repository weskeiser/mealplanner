import { FC } from 'react';
import { nutrientsData } from '../hooks/useNutrientsMemo';
import NutrientTable from '../NutrientTable/NutrientTable';

import * as Styled from './VitaminsTables.styled';

interface VitaminsTablesProps {
  tableData: nutrientsData;
  totalServingTitle: string;
}

const VitaminsTables: FC<VitaminsTablesProps> = ({
  tableData,
  totalServingTitle,
}) => {
  const vitaminsLeft = tableData.data.slice(0, 12);
  const vitaminsRight = tableData.data.slice(12);

  const vitaminsLeftTable = {
    data: vitaminsLeft,
    meta: tableData.meta,
  };

  const vitaminsRightTable = {
    data: vitaminsRight,
    meta: tableData.meta,
  };

  return (
    <Styled.VitaminsTables>
      <NutrientTable
        totalServingTitle={totalServingTitle}
        tableData={vitaminsLeftTable}
      />
      <NutrientTable
        totalServingTitle={totalServingTitle}
        tableData={vitaminsRightTable}
      />
    </Styled.VitaminsTables>
  );
};

export default VitaminsTables;
