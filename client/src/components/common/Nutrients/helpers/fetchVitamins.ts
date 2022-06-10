import { Dispatch } from 'react';
import fetchData from '../../../../helpers/fetchData';
import { IProducts } from '../../../../Interfaces/Products';
import { IVitamins } from '../../../../Interfaces/Vitamins';
import { getNutritionProps } from '../../../Mealplan/Mealplans/Day/helpers/getDailyTotalNutrition';
import translateNames from './translateNames';

const fetchVitamins = (
  selectedProduct: IProducts | getNutritionProps,
  dispatchTableData: Dispatch<any>
) => {
  fetchData('./vitamins.json', (data: IVitamins[]) => {
    let vitamins = {};

    if (selectedProduct.meal) {
      let productIds = [];
      const selectedProducts = selectedProduct.meal.products.map((product) => {
        productIds.push(product.id);
        return [product.id, product.properties.serving];
      });

      const selectedVitamins = data.filter((vitamins) =>
        productIds.includes(vitamins.id)
      );

      const vitaminsPerMeal = selectedProducts.reduce(
        (prev, curr) => {
          const productId = curr[0];
          const serving = curr[1];

          const vitamins = selectedVitamins.find(
            (fetchedProduct) => productId === fetchedProduct.id
          ).vitamins;

          const updateValue = (vitamin) =>
            prev[vitamin] + vitamins[vitamin] * (serving / 100);

          return Object.assign(prev, {
            omega3: updateValue('omega3'),
            omega6: updateValue('omega6'),
            vitaminA: updateValue('vitaminA'),
            retinol: updateValue('retinol'),
            betacarotene: updateValue('betacarotene'),
            vitaminD: updateValue('vitaminD'),
            vitaminE: updateValue('vitaminE'),
            thiamine: updateValue('thiamine'),
            riboflavin: updateValue('riboflavin'),
            niacin: updateValue('niacin'),
            vitaminB6: updateValue('vitaminB6'),
            folate: updateValue('folate'),
            vitaminB12: updateValue('vitaminB12'),
            vitaminC: updateValue('vitaminC'),
            calcium: updateValue('calcium'),
            iron: updateValue('iron'),
            sodium: updateValue('sodium'),
            potassium: updateValue('potassium'),
            magnesium: updateValue('magnesium'),
            zinc: updateValue('zinc'),
            selenium: updateValue('selenium'),
            copper: updateValue('copper'),
            phosphorus: updateValue('phosphorus'),
            iodine: updateValue('iodine'),
          });
        },
        {
          omega3: 0,
          omega6: 0,
          vitaminA: 0,
          retinol: 0,
          betacarotene: 0,
          vitaminD: 0,
          vitaminE: 0,
          thiamine: 0,
          riboflavin: 0,
          niacin: 0,
          vitaminB6: 0,
          folate: 0,
          vitaminB12: 0,
          vitaminC: 0,
          calcium: 0,
          iron: 0,
          sodium: 0,
          potassium: 0,
          magnesium: 0,
          zinc: 0,
          selenium: 0,
          copper: 0,
          phosphorus: 0,
          iodine: 0,
        }
      );
      vitamins = vitaminsPerMeal;
    } else {
      const isSelectedProduct = data.find((vitamins) => {
        return vitamins.id === selectedProduct.id;
      });
      vitamins = isSelectedProduct.vitamins;
    }

    const sortedVitamins = Object.entries(vitamins).sort((a, b) => b[1] - a[1]);

    const result = translateNames(sortedVitamins);

    dispatchTableData({
      type: 'vitamins',
      payload: {
        data: result,
        meta: { type: 'vitamins', id: selectedProduct.id },
      },
    });
  });
};
export default fetchVitamins;
