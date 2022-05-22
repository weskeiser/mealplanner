import Imealplans from '../../Interfaces/Mealplans';
import AddedProduct from '../AddedProduct/AddedProduct';
import NutritionList from '../NutritionList/NutritionList';

interface IAddedProducts {
  mealplan: Imealplans;
}

const AddedProducts = ({ mealplan }: IAddedProducts) => {
  const totalNutritionalValue = mealplan.products.reduce(
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
      <NutritionList className="lol" selectedProduct={totalNutritionalValue} />
    </div>
  );
};

export default AddedProducts;
