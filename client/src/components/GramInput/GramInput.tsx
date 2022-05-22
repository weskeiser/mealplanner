import { forwardRef } from 'react';
import { IProducts } from '../../Interfaces/Products';

interface IGramInput {
  selectedProduct: IProducts;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProducts>>;
  className: string;
  currentProduct: IProducts | {};
  setCurrentProduct: React.Dispatch<React.SetStateAction<IProducts>>;
}

const GramInput = forwardRef(
  (
    {
      className,
      selectedProduct,
      setSelectedProduct,
      currentProduct,
      setCurrentProduct,
    }: IGramInput,
    gramInputRef
  ) => {
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
      <div className={className}>
        <input
          ref={gramInputRef}
          className={className + '__input'}
          type="text"
          name="amountInGrams"
          id="addProduct"
          onInput={(e) => updateNutritionList(e)}
          placeholder="100g"
        />
      </div>
    );
  }
);

export default GramInput;
