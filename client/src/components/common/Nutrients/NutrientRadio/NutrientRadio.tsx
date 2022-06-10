import replaceTable from '../helpers/replaceTable';
import RadioInput from './RadioInput/RadioInput';
import { Dispatch, FC, useRef } from 'react';
import { IProducts } from '../../../../Interfaces/Products';
import { getNutritionProps } from '../../../Mealplan/Mealplans/Day/helpers/getDailyTotalNutrition';
import { nutrientsData } from '../Nutrients';

interface NutrientRadioProps {
  className: string;
  nutrientsData: nutrientsData;
  selectedProduct: IProducts | getNutritionProps;
  dispatchTableData: Dispatch<any>;
}

const NutrientRadio: FC<NutrientRadioProps> = ({
  className,
  nutrientsData,
  selectedProduct,
  dispatchTableData,
}) => {
  const radioFormRef = useRef<HTMLFormElement | undefined>();

  return (
    <form
      ref={radioFormRef}
      className={className + '__nutrients__radio'}
      onInput={(e) =>
        replaceTable(e, nutrientsData, selectedProduct, dispatchTableData)
      }
    >
      <RadioInput value="simple" />
      <RadioInput value="standard" defaultChecked={true} />
      <RadioInput value="vitamins" />
    </form>
  );
};

export default NutrientRadio;
