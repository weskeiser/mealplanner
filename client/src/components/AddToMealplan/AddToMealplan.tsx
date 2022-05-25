import { IMealplans } from '../../Interfaces/Mealplans';
import { IProducts } from '../../Interfaces/Products';
import SelectMealplanDay from '../SelectMealplanDay/SelectMealplanDay';
import SelectMealplanMeal from '../SelectMealplanMeal/SelectMealplanMeal';
import GramInput from '../GramInput/GramInput';
import { FC, useRef, useState } from 'react';
import addProductToMeal from './addProductToMeal';

interface IAddToMealplan {
  className: string;
  selectedProduct: IProducts;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProducts>>;
  mealPlans: IMealplans[];
  setMealplans: React.Dispatch<React.SetStateAction<IMealplans[]>>;
  gramInputRef: React.MutableRefObject<undefined>;
  currentProduct: IProducts | {};
  setCurrentProduct: React.Dispatch<React.SetStateAction<IProducts>>;
}
const AddToMealplan: FC<IAddToMealplan> = ({
  className,
  selectedProduct,
  mealPlans,
  setMealplans,
  setSelectedProduct,
  currentProduct,
  setCurrentProduct,
  gramInputRef,
}) => {
  const selectMealplanDayRef = useRef();
  const selectMealplanMealRef = useRef();

  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className={className + '__add-to-list'}>
      <SelectMealplanDay ref={selectMealplanDayRef} className={className} />
      <GramInput
        ref={gramInputRef}
        className={className + '__add-to-list__gram-input'}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
      />
      <SelectMealplanMeal ref={selectMealplanMealRef} className={className} />
      <button
        className={className + '__add-to-list__add'}
        onClick={(e) =>
          addProductToMeal(
            e,
            selectedProduct,
            mealPlans,
            setMealplans,
            setErrorMessage,
            selectMealplanMealRef,
            selectMealplanDayRef
          )
        }
      >
        Legg til
      </button>
      {true && (
        <p className={className + '__add-to-list__error'}>{errorMessage}</p>
      )}
    </div>
  );
};

export default AddToMealplan;
