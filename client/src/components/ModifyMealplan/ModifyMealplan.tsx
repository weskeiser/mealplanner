import { Dispatch, FC, MutableRefObject, SetStateAction } from 'react';
import { IMealplans } from '../../Interfaces/Mealplans';
import { IProducts } from '../../Interfaces/Products';
import AddToMealplan from '../AddToMealplan/AddToMealplan';
import NutritionList from '../NutritionList/NutritionList';
import SelectedProductDisplay from '../SelectedProductDisplay/SelectedProductDisplay';

interface IModifyMealplan {
  selectedProduct: IProducts;
  setSelectedProduct: Dispatch<SetStateAction<IProducts>>;
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<SetStateAction<IMealplans[]>>;
  servingInputRef: MutableRefObject<HTMLInputElement | undefined>;
  currentProduct: IProducts | {};
  setCurrentProduct: Dispatch<SetStateAction<IProducts>>;
}

const ModifyMealplan: FC<IModifyMealplan> = ({
  selectedProduct,
  mealPlans,
  setMealPlans,
  setSelectedProduct,
  currentProduct,
  setCurrentProduct,
  servingInputRef,
}) => {
  const selectedProductClass = 'selected-product';
  return (
    <section className={selectedProductClass}>
      <SelectedProductDisplay selectedProduct={selectedProduct} />
      <NutritionList
        className={selectedProductClass}
        selectedProduct={selectedProduct}
        totalServing={'Pr. ' + selectedProduct.properties.serving + 'g'}
      />
      <AddToMealplan
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        mealPlans={mealPlans}
        setMealPlans={setMealPlans}
        className={selectedProductClass}
        servingInputRef={servingInputRef}
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
      />
    </section>
  );
};

export default ModifyMealplan;
