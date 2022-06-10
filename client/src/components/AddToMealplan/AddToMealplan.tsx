import ServingInput from './ServingInput/ServingInput';
import { FC, useState } from 'react';
import SubmitButton from './SubmitButton/SubmitButton';
import MealplanSelect from './MealplanSelect/MealplanSelect';
import StatusMessages from './StatusMessages/StatusMessages';
import { MealPlanSectionProps } from '../MealplanSection/MealplanSection';

const AddToMealplan: FC<MealPlanSectionProps> = ({
  selectedProduct,
  mealPlans,
  setMealPlans,
  setSelectedProduct,
  selectedProductOriginalServing,
  setSelectedProductOriginalServing,
  servingInputRef,
}) => {
  const [unsuccessfulAdditions, setUnsuccessfulAdditions] = useState<
    string[] | never[]
  >([]);
  const [successfulAdditions, setSuccessfulAdditions] = useState<
    string[] | never[]
  >([]);

  const className = 'add-to-mealplan';

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
            selectedProductOriginalServing={selectedProductOriginalServing}
            setSelectedProductOriginalServing={
              setSelectedProductOriginalServing
            }
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
