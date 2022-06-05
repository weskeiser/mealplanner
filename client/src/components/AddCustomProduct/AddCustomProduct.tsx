import { Dispatch, FC, SetStateAction, useState } from 'react';
import { IProducts } from '../../Interfaces/Products';
import ListItem from '../common/ListItem';

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

  const addCustomProduct = (e) => {
    e.preventDefault();
    const form = e.target.form;
    // console.log(e.target.form.Kalorier.value);
    setSelectedProduct({
      id: 99999,
      name: form.name.value,
      category: '',
      properties: {
        brand: '',
        logo: '',
        serving: form.serving.value,
        calories: form.Kalorier.value,
        macros: {
          fat: form.Fett.value,
          protein: form.Proteiner.value,
          carbs: {
            total: form.Karbohydrater.value,
            sugars: form[6].value,
          },
        },
        salt: form.Salt.value,
      },
    });
  };

  const inputNames = [
    'Kalorier',
    'Fett',
    'Proteiner',
    'Karbohydrater',
    '- Hvorav sukkerarter',
    'Salt',
  ];

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
          <div className="custom-product__form__name-and-serving">
            <input
              className="custom-product__form__name-and-serving__name"
              type="text"
              placeholder="Matvarenavn"
              name="name"
            />
            <input
              className="custom-product__form__name-and-serving__serving"
              type="number"
              placeholder="gram"
              name="serving"
            />
          </div>
          <ul className="custom-product__form__list">
            {inputNames.map((key) => (
              <ListItem
                className="custom-product__form__list__input"
                key={'custom' + key}
              >
                <>
                  <label htmlFor={'addCustom' + key}>{key}</label>
                  <input
                    id={'addCustom' + key}
                    type="number"
                    name={key}
                    placeholder=""
                  />
                </>
              </ListItem>
            ))}
          </ul>
          <button
            formTarget="customProductForm"
            type="button"
            onClick={(e) => addCustomProduct(e)}
          >
            Velg
          </button>
        </form>
      )}
    </section>
  );
};

export default AddCustomProduct;
