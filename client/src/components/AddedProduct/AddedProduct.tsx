import Imealplans from '../../Interfaces/Mealplans';
import { IProducts } from '../../Interfaces/Products';

interface IAddedProducts {
  mealplan: Imealplans;
}

const AddedProducts = ({ mealplan }: IAddedProducts) => {
  // const removeProductFromList = (
  //   e: React.MouseEvent<HTMLDivElement, MouseEvent>
  // ) => {
  //   e.preventDefault();
  //   const currentListName = addToListDropdownRef.current.value;

  //   const updatedMealplan = mealplans.map((mealplan) => {
  //     if (mealplan.listName === currentListName) {
  //       return {
  //         ...mealplan,
  //         products: [...mealplan.products, selectedProduct],
  //       };
  //     }
  //     return mealplan;
  //   });

  //   setMealplans(updatedMealplan);
  // };

  return (
    <>
      {mealplan.products.map(({ name, properties }: IProducts) => (
        <div className="added-products__product">
          <p className="added-products__product__title">
            {name},{' '}
            <span className="added-products__product__title__brand">
              {properties.brand}
            </span>
          </p>
          <div className="added-products__product__serving-remove-container">
            <p className="added-products__product__serving">
              {properties.serving}g
            </p>
            <button
              className="added-products__product__remove"
              onClick={(e) => console.log('ho')}
            >
              &#10005;
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AddedProducts;
