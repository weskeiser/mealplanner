import NutrientTable from '../NutrientTable/NutrientTable';

const VitaminsTables = ({
  tableData,
  className,
  selectedProduct,
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
        selectedProduct={selectedProduct}
        totalServingTitle={totalServingTitle}
        tableData={vitaminsLeftTable}
      />
      <NutrientTable
        className={className + '__table'}
        selectedProduct={selectedProduct}
        totalServingTitle={totalServingTitle}
        tableData={vitaminsRightTable}
      />
    </div>
  );
};

export default VitaminsTables;
