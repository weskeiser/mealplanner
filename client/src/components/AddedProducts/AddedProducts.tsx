import Imealplans from '../../Interfaces/Mealplans';
import AddedProduct from '../AddedProduct/AddedProduct';
import NutritionList from '../NutritionList/NutritionList';

interface IAddedProducts {
  mealplan: Imealplans;
}

export interface ItotalNutritionalValue {
  properties: {
    calories: number;
    macros: {
      fat: number;
      protein: number;
      carbs: {
        total: number;
        sugars: number;
      };
    };
  };
}

const AddedProducts = ({ mealplan }: IAddedProducts) => {
  const totalNutritionalValue: ItotalNutritionalValue =
    mealplan.products.reduce(
      (prev, curr) => {
        return {
          ...prev,
          properties: {
            ...prev.properties,
            calories: prev.properties.calories + curr.properties.calories,
            macros: {
              fat: prev.properties.macros.fat + curr.properties.macros.fat,
              protein:
                prev.properties.macros.protein + curr.properties.macros.protein,
              carbs: {
                total:
                  prev.properties.macros.carbs.total +
                  curr.properties.macros.carbs.total,
                sugars:
                  prev.properties.macros.carbs.sugars +
                  curr.properties.macros.carbs.sugars,
              },
            },
            salt: prev.properties.salt + curr.properties.salt,
          },
        };
      },
      {
        properties: {
          calories: 0,
          macros: {
            fat: 0,
            protein: 0,
            carbs: {
              total: 0,
              sugars: 0,
            },
          },
          salt: 0,
        },
      }
    );

  return (
    <div>
      <div className="added-products">
        <AddedProduct mealplan={mealplan} />
      </div>
      <div className="added-products__nutrition-list__heading">
        <h3 className="added-products__nutrition-list__heading__title">
          Næringsinnhold
        </h3>
        <p className="added-products__nutrition-list__heading__serving">
          Totalt
        </p>
      </div>
      <NutritionList
        className="added-products__nutrition-list"
        selectedProduct={totalNutritionalValue}
      />
    </div>
  );
};

export default AddedProducts;
