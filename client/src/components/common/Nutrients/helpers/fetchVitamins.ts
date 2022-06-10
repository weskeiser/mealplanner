import { Dispatch } from 'react';
import fetchData from '../../../../helpers/fetchData';
import { IProducts } from '../../../../Interfaces/Products';
import { IVitamins } from '../../../../Interfaces/Vitamins';
import { getNutritionProps } from '../../../Mealplan/Mealplans/Day/helpers/getDailyTotalNutrition';

const fetchVitamins = (
  selectedProduct: IProducts | getNutritionProps,
  dispatchTableData: Dispatch<any>
) => {
  fetchData('./vitamins.json', (data: IVitamins[]) => {
    // if (selectedProduct.tableId === 'meal') {

    // }
    const isSelectedProduct = data.find((productVitamins) => {
      return productVitamins.id === selectedProduct.id;
    });

    const vitamins = isSelectedProduct.vitamins;

    const sortedVitamins = Object.entries(vitamins).sort((a, b) => b[1] - a[1]);

    const sortedAndTranslated = sortedVitamins.reduce((prev, curr) => {
      const sorted = (newKey: string) => {
        return Object.assign(prev, { [newKey]: curr[1] });
      };

      switch (curr[0]) {
        case 'omega3':
          return sorted('Omega3');
        case 'omega6':
          return sorted('Omega 6');
        case 'vitaminA':
          return sorted('Vitamin A');
        case 'retinol':
          return sorted('Retinol');
        case 'betacarotene':
          return sorted('Betakaroten');
        case 'vitaminD':
          return sorted('Vitamin D');
        case 'vitaminE':
          return sorted('Vitamin E');
        case 'thiamine':
          return sorted('Tiamin');
        case 'riboflavin':
          return sorted('Riboflavin');
        case 'niacin':
          return sorted('Niacin');
        case 'vitaminB6':
          return sorted('Vitamin B6');
        case 'folate':
          return sorted('Folat');
        case 'vitaminB12':
          return sorted('Vitamin B12');
        case 'vitaminC':
          return sorted('Vitamin C');
        case 'calcium':
          return sorted('Kalsium');
        case 'iron':
          return sorted('Jern');
        case 'sodium':
          return sorted('Natrium');
        case 'potassium':
          return sorted('Kalium');
        case 'magnesium':
          return sorted('Magnesium');
        case 'zinc':
          return sorted('Sink');
        case 'selenium':
          return sorted('Selenium');
        case 'copper':
          return sorted('Kobber');
        case 'phosphorus':
          return sorted('Fosfor');
        case 'iodine':
          return sorted('Jod');
        default:
          return 0;
      }
    }, {});
    dispatchTableData({
      type: 'vitamins',
      payload: {
        ...sortedAndTranslated,
        type: 'vitamins',
        id: selectedProduct.id,
      },
    });
  });
};
export default fetchVitamins;
