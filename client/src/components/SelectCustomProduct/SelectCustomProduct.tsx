import { Dispatch, FC, SetStateAction, useState } from 'react';
import { IProducts } from '../../Interfaces/Products';
import NutrientInputs from './NutrientInputs/NutrientInputs';
import selectCustomProduct from './SelectButton/helpers/selectCustomProduct';
import SelectButton from './SelectButton/SelectButton';

interface AddCustomProductProps {
  setSelectedProduct: Dispatch<SetStateAction<IProducts>>;
}

const AddCustomProduct: FC<AddCustomProductProps> = ({
  setSelectedProduct,
}) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <section className="custom-product">
      <button
        className="custom-product__initializer"
        onClick={toggleVisibility}
      >
        + Legg til egendefinert
      </button>
      {visible && (
        <form className="custom-product__form" id="customProductForm">
          <input
            className="custom-product__form__name"
            type="text"
            placeholder="Matvarenavn"
            name="name"
          />

          <NutrientInputs />

          <SelectButton
            formTarget="customProductForm"
            type="button"
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              selectCustomProduct(e, setSelectedProduct)
            }
            children="Velg"
          />
        </form>
      )}
    </section>
  );
};

export default AddCustomProduct;
