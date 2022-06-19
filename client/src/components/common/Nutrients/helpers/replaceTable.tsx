import { Dispatch, FormEvent } from 'react';
import { IProducts } from '../../../../Interfaces/Products';
import { IVitamins } from '../../../../Interfaces/Vitamins';
import { getNutritionProps } from '../../../Mealplan/Mealplans/Day/helpers/getDailyTotalNutrition';
import { nutrientsData } from '../Nutrients';
import fetchVitamins from './fetchVitamins';

const replaceTable = (
  viewType: string | FormEvent<HTMLFormElement>,
  nutrientsData: nutrientsData,
  selectedProduct: IProducts | getNutritionProps | IVitamins['vitamins'],
  dispatchTableData: Dispatch<any>
) => {
  let type = viewType;

  if (viewType.target) {
    type = viewType.target.value;
  }

  switch (type) {
    case 'standard':
      dispatchTableData({
        type: type,
        payload: {
          ...nutrientsData,
          meta: {
            ...nutrientsData.meta,
            type: nutrientsData.meta.type,
            id: selectedProduct.id,
          },
        },
      });
      break;

    case 'simple':
      dispatchTableData({
        type: type,
        payload: {
          data: nutrientsData.data.slice(0, 4),
          meta: {
            ...nutrientsData.meta,
            type: nutrientsData.meta.type,
            id: selectedProduct.id,
          },
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
