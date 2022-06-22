import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  Dispatch,
  SetStateAction,
} from 'react';
import { css } from 'styled-components';
import { IMealplans } from '../../../Interfaces/Mealplans';
import { IProducts } from '../../../Interfaces/Products';
import handleKeyDown from './helpers/handleKeyDown';
import updateSelectedProduct from './helpers/updateSelectedProduct';

import styled from 'styled-components';

interface ServingInputProps {
  selectedProduct: IProducts;
  setSelectedProduct: Dispatch<SetStateAction<IProducts>>;
  selectedProductOriginalServing: IProducts | {};
  setSelectedProductOriginalServing: Dispatch<SetStateAction<IProducts>>;
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<SetStateAction<IMealplans[]>>;
  setUnsuccessfulAdditions: Dispatch<SetStateAction<string[] | never[]>>;
  setSuccessfulAdditions: Dispatch<SetStateAction<string[] | never[]>>;
}

export const StyledServingInput: ForwardRefExoticComponent<
  ServingInputProps & RefAttributes<HTMLInputElement | undefined>
> = forwardRef<HTMLInputElement | undefined, ServingInputProps>(
  (
    {
      selectedProduct,
      setSelectedProduct,
      selectedProductOriginalServing,
      setSelectedProductOriginalServing,
      mealPlans,
      setMealPlans,
      setUnsuccessfulAdditions,
      setSuccessfulAdditions,
    },
    servingInputRef
  ) => {
    return (
      <StyledInput
        ref={servingInputRef}
        type="number"
        name="amountInGrams"
        id="addProduct"
        placeholder="100g"
        autoComplete="off"
        maxLength={4}
        onInput={(e) =>
          updateSelectedProduct(
            e,
            selectedProduct,
            setSelectedProduct,
            selectedProductOriginalServing,
            setSelectedProductOriginalServing
          )
        }
        onKeyDown={(e) =>
          handleKeyDown(
            e,
            selectedProduct,
            mealPlans,
            setMealPlans,
            setUnsuccessfulAdditions,
            setSuccessfulAdditions
          )
        }
      />
    );
  }
);

const colorFromTheme = (color: string) => {
  return css`
    ${({ theme }) => theme.colors[color]}
  `;
};

const pageColor = colorFromTheme('pageColor');
const pageColorText = colorFromTheme('pageColorText');

const StyledInput = styled.input`
  border-radius: 0.3em;
  appearance: textfield;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  width: 100%;
  padding-top: 0.1em;
  text-align: center;
  border: 1px solid ${pageColor};
  outline: none;
  font-size: 1.1em;
  color: ${pageColorText};
  height: 2em;
  border-right: 2px solid ${pageColor};
  border-bottom: 2px solid ${pageColor};

  &:focus::placeholder {
    color: transparent;
  }
`;

export default StyledServingInput;
