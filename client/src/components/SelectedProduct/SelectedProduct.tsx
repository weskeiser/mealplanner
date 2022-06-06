import { FC } from 'react';
import { IProducts } from '../../Interfaces/Products';
import NutritionList from '../common/NutritionList/NutritionList';
import SelectedProductDisplay from './SelectedProductDisplay/SelectedProductDisplay';

interface SelectedProductProps {
  selectedProduct: IProducts;
}

const SelectedProduct: FC<SelectedProductProps> = ({ selectedProduct }) => {
  const selectedProductClass = 'selected-product';
  return (
    <>
      <section className={selectedProductClass}>
        <SelectedProductDisplay selectedProduct={selectedProduct} />
        <NutritionList
          className={selectedProductClass}
          selectedProduct={selectedProduct}
          totalServing={'Pr. ' + selectedProduct.properties.serving + 'g'}
        />
      </section>
    </>
  );
};
export default SelectedProduct;
