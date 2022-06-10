import { IProducts } from '../../../Interfaces/Products';
import { FC, useEffect, useMemo, useReducer, useRef } from 'react';
import { getNutritionProps } from '../../Mealplan/Mealplans/Day/helpers/getDailyTotalNutrition';
import NutritionRadio from './NutritionRadio/NutritionRadio';
import NutritionTable from './NutritionTable/NutritionTable';
import tableDataReducer from './helpers/tableReducer';
import replaceTable from './helpers/replaceTable';
import fetchVitamins from './helpers/fetchVitamins';

interface NutritionListProps {
  className: string;
  selectedProduct: IProducts | getNutritionProps;
  totalServingTitle: string;
}

const NutritionList: FC<NutritionListProps> = ({
  className,
  selectedProduct,
  totalServingTitle,
}) => {
  const radioFormRef = useRef<HTMLFormElement | undefined>();

  const nutritionData = useMemo(() => {
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
      case: 'standard',
      title: 'Næringsinnhold',
      id: selectedProduct.id,
    };
  }, [selectedProduct]);

  const [tableData, dispatchTableData] = useReducer(
    tableDataReducer,
    nutritionData
  );

  useEffect(() => {
    if (tableData.case === 'standard') {
      dispatchTableData({
        type: 'update',
        payload: { ...nutritionData, case: tableData.case },
      });
    }

    if (tableData.case === 'simple') {
      dispatchTableData({
        type: 'update',
        payload: {
          Kalorier: nutritionData.Kalorier,
          Fett: nutritionData.Fett,
          Proteiner: nutritionData.Proteiner,
          Karbohydrater: nutritionData.Karbohydrater,
          '- Hvorav sukkerarter': nutritionData['- Hvorav sukkerarter'],
          case: tableData.case,
          id: tableData.id,
        },
      });
    }

    if (tableData.case === 'vitamins') {
      fetchVitamins(selectedProduct, dispatchTableData);
    }
  }, [selectedProduct]);

  return (
    <>
      <NutritionTable
        className={className}
        selectedProduct={selectedProduct}
        totalServingTitle={totalServingTitle}
        tableData={tableData}
      />
      <form
        ref={radioFormRef}
        className={className + '__nutrition-list__radio'}
        onInput={(e) =>
          replaceTable(e, nutritionData, selectedProduct, dispatchTableData)
        }
      >
        <NutritionRadio value="simple" />
        <NutritionRadio value="standard" defaultChecked={true} />
        <NutritionRadio value="vitamins" />
      </form>
    </>
  );
};

export default NutritionList;
