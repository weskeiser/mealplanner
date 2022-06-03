import { IMealplans } from '../../../Interfaces/Mealplans';
import { IProducts } from '../../../Interfaces/Products';
import ServingInput from './ServingInput/ServingInput';
import {
  FC,
  useState,
  MutableRefObject,
  Dispatch,
  SetStateAction,
} from 'react';
import SubmitButton from './SubmitButton/SubmitButton';
import MealplanSelect from './MealplanSelect/MealplanSelect';
import StatusMessages from './StatusMessages/StatusMessages';

interface IAddToMealplan {
  className: string;
  selectedProduct: IProducts;
  setSelectedProduct: Dispatch<SetStateAction<IProducts>>;
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<SetStateAction<IMealplans[]>>;
  servingInputRef: MutableRefObject<HTMLInputElement | undefined>;
  currentProduct: IProducts | {};
  setCurrentProduct: Dispatch<SetStateAction<IProducts>>;
}
const AddToMealplan: FC<IAddToMealplan> = ({
  className,
  selectedProduct,
  mealPlans,
  setMealPlans,
  setSelectedProduct,
  currentProduct,
  setCurrentProduct,
  servingInputRef,
}) => {
  const [unsuccessfulAdditions, setUnsuccessfulAdditions] = useState<
    string[] | never[]
  >([]);
  const [successfulAdditions, setSuccessfulAdditions] = useState<
    string[] | never[]
  >([]);

  return (
    <>
      <form id="addToList" className={className + '__add-to-list'}>
        <MealplanSelect
          className={className}
          mealPlans={mealPlans}
          setMealPlans={setMealPlans}
        />
        <div className={className + '__add-to-list__serving-and-add'}>
          <ServingInput
            ref={servingInputRef}
            className={className + '__add-to-list__serving'}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            currentProduct={currentProduct}
            setCurrentProduct={setCurrentProduct}
            mealPlans={mealPlans}
            setMealPlans={setMealPlans}
            setUnsuccessfulAdditions={setUnsuccessfulAdditions}
            setSuccessfulAdditions={setSuccessfulAdditions}
          />

          <SubmitButton
            className={className}
            selectedProduct={selectedProduct}
            mealPlans={mealPlans}
            setMealPlans={setMealPlans}
            setUnsuccessfulAdditions={setUnsuccessfulAdditions}
            setSuccessfulAdditions={setSuccessfulAdditions}
          />
        </div>
      </form>
      <StatusMessages
        className={className}
        successfulAdditions={successfulAdditions}
        unsuccessfulAdditions={unsuccessfulAdditions}
        selectedProduct={selectedProduct}
      />
    </>
  );
};

export default AddToMealplan;
