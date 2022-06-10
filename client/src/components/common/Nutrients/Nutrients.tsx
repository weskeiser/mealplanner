import { IProducts } from '../../../Interfaces/Products';
import { FC, useEffect, useMemo, useReducer } from 'react';
import { getNutritionProps } from '../../Mealplan/Mealplans/Day/helpers/getDailyTotalNutrition';
import NutrientTable from './NutrientTable/NutrientTable';
import tableDataReducer from './helpers/tableReducer';
import NutrientRadio from './NutrientRadio/NutrientRadio';
import replaceTable from './helpers/replaceTable';
import VitaminsTables from './VitaminsTables/VitaminsTables';

interface NutrientsProps {
  className: string;
  selectedProduct: IProducts | getNutritionProps;
  totalServingTitle: string;
}

export interface nutrientsData {
  data: [string, number][];
  meta: {
    type: string;
    title: string;
    id: string | number;
  };
}

const Nutrients: FC<NutrientsProps> = ({
  className,
  selectedProduct,
  totalServingTitle,
}) => {
  const nutrientsData = useMemo<nutrientsData>(() => {
    const { properties } = selectedProduct;
    const { calories, macros, salt, fiber } = properties;
    const { fat, protein, carbs } = macros;
    const { total: fatTotal } = fat;
    const {
      total,
      sugar: { total: totalSugar },
    } = carbs;

    return {
      data: [
        ['Kalorier', calories],
        ['Fett', fatTotal],
        ['Proteiner', protein],
        ['Karbohydrater', total],
        ['- Hvorav sukkerarter', totalSugar],
        ['Fiber', fiber],
        ['Salt', salt],
      ],
      meta: {
        type: 'standard',
        title: 'Næringsinnhold',
        id: selectedProduct.id,
      },
    };
  }, [selectedProduct]);

  const [tableData, dispatchTableData] = useReducer(
    tableDataReducer,
    nutrientsData
  );

  useEffect(() => {
    replaceTable(
      tableData.meta.type,
      nutrientsData,
      selectedProduct,
      dispatchTableData
    );
  }, [selectedProduct]);

  return (
    <>
      {tableData.meta.type === 'vitamins' ? (
        <VitaminsTables
          tableData={tableData}
          className={className + '__nutrients__vitamins'}
          selectedProduct={selectedProduct}
          totalServingTitle={totalServingTitle}
        />
      ) : (
        <NutrientTable
          className={className + '__nutrients'}
          selectedProduct={selectedProduct}
          totalServingTitle={totalServingTitle}
          tableData={tableData}
        />
      )}

      <NutrientRadio
        className={className}
        nutrientsData={nutrientsData}
        selectedProduct={selectedProduct}
        dispatchTableData={dispatchTableData}
      />
    </>
  );
};

export default Nutrients;
