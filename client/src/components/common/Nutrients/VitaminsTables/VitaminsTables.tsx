import { FC } from 'react';
import { nutrientsData } from '../hooks/useNutrientsMemo';
import NutrientTable from '../NutrientTable/NutrientTable';

interface VitaminsTablesProps {
  tableData: nutrientsData;
  className: string;
  totalServingTitle: string;
}

const VitaminsTables: FC<VitaminsTablesProps> = ({
  tableData,
  className,
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
    <div className={className}>
      <NutrientTable
        className={className + '__table'}
        totalServingTitle={totalServingTitle}
        tableData={vitaminsLeftTable}
      />
      <NutrientTable
        className={className + '__table'}
        totalServingTitle={totalServingTitle}
        tableData={vitaminsRightTable}
      />
    </div>
  );
};

export default VitaminsTables;
