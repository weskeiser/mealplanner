import { Dispatch, FormEvent } from 'react';
import { IProducts } from '../../../../Interfaces/Products';
import { getNutritionProps } from '../../../Mealplan/Mealplans/Day/helpers/getDailyTotalNutrition';
import { nutrientsData } from '../Nutrients';
import fetchVitamins from './fetchVitamins';

const replaceTable = (
  viewType: string | FormEvent<HTMLFormElement>,
  nutrientsData: nutrientsData,
  selectedProduct: IProducts | getNutritionProps,
  dispatchTableData: Dispatch<any>
) => {
  let type = viewType;

  if (viewType.target) {
    type = viewType.target.value;
  }

  // TODO: Identify selectedProduct by type to be able to render vitamins

  switch (type) {
    case 'standard':
      dispatchTableData({
        type: type,
        payload: {
          ...nutrientsData,
          type: nutrientsData.type,
          id: selectedProduct.id,
        },
      });
      break;

    case 'simple':
      dispatchTableData({
        type: type,
        payload: {
          Kalorier: nutrientsData.Kalorier,
          Fett: nutrientsData.Fett,
          Proteiner: nutrientsData.Proteiner,
          Karbohydrater: nutrientsData.Karbohydrater,
          '- Hvorav sukkerarter': nutrientsData['- Hvorav sukkerarter'],
          type: nutrientsData.type,
          id: selectedProduct.id,
        },
      });
      break;

    case 'vitamins':
      fetchVitamins(selectedProduct, dispatchTableData);
      break;

    default:
      return;
  }
};

export default replaceTable;
