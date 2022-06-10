import { IProducts } from '../../../Interfaces/Products';
import { FC, useEffect, useMemo, useReducer } from 'react';
import { getNutritionProps } from '../../Mealplan/Mealplans/Day/helpers/getDailyTotalNutrition';
import NutrientTable from './NutrientTable/NutrientTable';
import tableDataReducer from './helpers/tableReducer';
import NutrientRadio from './NutrientRadio/NutrientRadio';
import replaceTable from './helpers/replaceTable';

interface NutrientsProps {
  className: string;
  selectedProduct: IProducts | getNutritionProps;
  totalServingTitle: string;
}

export interface nutrientsData {
  Kalorier: number;
  Fett: number;
  Proteiner: number;
  Karbohydrater: number;
  '- Hvorav sukkerarter': number;
  Fiber: number;
  Salt: number;
  type: string;
  title: string;
  id: number | string;
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
      Kalorier: calories,
      Fett: fatTotal,
      Proteiner: protein,
      Karbohydrater: total,
      '- Hvorav sukkerarter': totalSugar,
      Fiber: fiber,
      Salt: salt,
      type: 'standard',
      title: 'Næringsinnhold',
      id: selectedProduct.id,
    };
  }, [selectedProduct]);

  const [tableData, dispatchTableData] = useReducer(
    tableDataReducer,
    nutrientsData
  );

  useEffect(() => {
    replaceTable(
      tableData.type,
      nutrientsData,
      selectedProduct,
      dispatchTableData
    );
  }, [selectedProduct]);

  const play = () => {
    const vitamins = Object.entries(tableData);
    const nonVitamins = vitamins.splice(-3);

    const vitaminsLeftArray = vitamins.slice(0, 12).concat(nonVitamins);
    const vitaminsRightArray = vitamins.slice(12).concat(nonVitamins);

    return (
      <>
        <NutrientTable
          className={className}
          selectedProduct={selectedProduct}
          totalServingTitle={totalServingTitle}
          tableData={tableData}
        />
        <NutrientTable
          className={className}
          selectedProduct={selectedProduct}
          totalServingTitle={totalServingTitle}
          tableData={tableData}
        />
      </>
    );
  };

  // play();

  return (
    <>
      <NutrientTable
        className={className}
        selectedProduct={selectedProduct}
        totalServingTitle={totalServingTitle}
        tableData={tableData}
      />

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
