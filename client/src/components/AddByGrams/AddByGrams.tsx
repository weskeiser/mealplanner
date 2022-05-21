import { useEffect, useMemo, useState } from 'react';
import { IProducts } from '../../Interfaces/Products';

interface IAddByGrams {
  className: string;
  selectedProduct: IProducts;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProducts>>;
  allChosenProducts: IProducts[];
  setAllChosenProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
}

const AddByGrams = ({
  className,
  selectedProduct,
  allChosenProducts,
  setAllChosenProducts,
  setSelectedProduct,
}: IAddByGrams) => {
  const [currentProduct, setCurrentProduct] = useState<IProducts>({});

  const incrementProduct = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setAllChosenProducts([...allChosenProducts, selectedProduct]);
  };

  const { properties } = selectedProduct;
  const { serving, calories, salt, macros } = properties;
  const { fat, protein, carbs } = macros;
  const { total, sugars } = carbs;

  const updateNutritionList = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    const gramInput = parseFloat(input.value);

    if (Object.keys(currentProduct).length === 0) {
      setCurrentProduct(selectedProduct);
    }

    if (!gramInput) {
      setSelectedProduct(currentProduct);
      return;
    }

    const byGramInput = (value: number) => {
      return (value / serving) * gramInput;
    };

    setSelectedProduct({
      ...selectedProduct,
      properties: {
        ...properties,
        serving: gramInput,
        calories: +byGramInput(calories).toFixed(3),
        macros: {
          fat: +byGramInput(fat).toFixed(3),
          protein: +byGramInput(protein).toFixed(3),
          carbs: {
            total: +byGramInput(total).toFixed(3),
            sugars: +byGramInput(sugars).toFixed(3),
          },
        },
        salt: +byGramInput(salt).toFixed(3),
      },
    });
  };

  return (
    <form className={className + '__add-by-grams'}>
      <input
        type="text"
        name="amountInGrams"
        id="addProduct"
        onInput={(e) => updateNutritionList(e)}
      />
      <label htmlFor="amountInGrams">gram</label>
      <button onClick={(e) => incrementProduct(e)}>Legg til</button>
    </form>
  );
};

export default AddByGrams;
