import { Dispatch, FC, useRef } from 'react';

import replaceTable from '../helpers/replaceTable';
import RadioInput from './RadioInput/RadioInput';
import { IProducts } from '../../../../Interfaces/Products';
import { nutrientsData } from '../Nutrients';
import { getNutritionProps } from '../../../Mealplan/Mealplans/Day/helpers/getDailyTotalNutrition';

import * as Styled from './NutrientRadio.styled';

interface NutrientRadioProps {
  nutrientsData: nutrientsData;
  selectedProduct: IProducts | getNutritionProps;
  dispatchTableData: Dispatch<any>;
}

const NutrientRadio: FC<NutrientRadioProps> = ({
  nutrientsData,
  selectedProduct,
  dispatchTableData,
}) => {
  const radioFormRef = useRef<HTMLFormElement | undefined>();

  return (
    <Styled.NutrientRadio
      ref={radioFormRef}
      onInput={(e) =>
        replaceTable(e, nutrientsData, selectedProduct, dispatchTableData)
      }
    >
      <RadioInput value="simple" />
      <RadioInput value="standard" defaultChecked={true} />
      <RadioInput value="vitamins" />
    </Styled.NutrientRadio>
  );
};

export default NutrientRadio;
