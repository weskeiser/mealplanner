import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  FC,
  useState,
} from 'react';
import MealplanSelect from './MealplanSelect/MealplanSelect';
import StatusMessages from './StatusMessages/StatusMessages';
import { IMealplans } from '../../Interfaces/Mealplans';
import { IProducts } from '../../Interfaces/Products';

import * as Styled from './AddToMealplan.styled';
import addProductToMeal from './helpers/addProductToMeal';
import StyledServingInput from './ServingInput/ServingInput.styled';

export interface AddToMealPlanProps {
  selectedProduct: IProducts;
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<SetStateAction<IMealplans[]>>;
  setSelectedProduct: Dispatch<SetStateAction<IProducts>>;
  servingInputRef: MutableRefObject<HTMLInputElement | undefined>;
  selectedProductOriginalServing: IProducts | {};
  setSelectedProductOriginalServing: Dispatch<SetStateAction<IProducts>>;
}

const AddToMealplan: FC<AddToMealPlanProps> = ({
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

  return (
    <>
      <Styled.Form id="addToList">
        <MealplanSelect mealPlans={mealPlans} setMealPlans={setMealPlans} />

        <Styled.Container>
          <StyledServingInput
            ref={servingInputRef}
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

          <Styled.SubmitButton
            formTarget="addToList"
            onClick={(e) =>
              addProductToMeal(
                e,
                selectedProduct,
                mealPlans,
                setMealPlans,
                setUnsuccessfulAdditions,
                setSuccessfulAdditions
              )
            }
          >
            Legg til
          </Styled.SubmitButton>
        </Styled.Container>
      </Styled.Form>
      <StatusMessages
        successfulAdditions={successfulAdditions}
        unsuccessfulAdditions={unsuccessfulAdditions}
        selectedProduct={selectedProduct}
      />
    </>
  );
};

export default AddToMealplan;
