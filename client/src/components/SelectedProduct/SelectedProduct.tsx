import { FC } from 'react';
import { IProducts } from '../../Interfaces/Products';
import NutritionList from '../common/NutritionList/NutritionList';
import SelectedProductDisplay from './SelectedProductDisplay/SelectedProductDisplay';
import SourceAttribution from './SourceAttribution/SourceAttribution';

interface SelectedProductProps {
  selectedProduct: IProducts;
}

const SelectedProduct: FC<SelectedProductProps> = ({ selectedProduct }) => {
  const selectedProductClass = 'selected-product';
  return (
    <>
      <section className={selectedProductClass}>
        <SelectedProductDisplay selectedProduct={selectedProduct} />
        <SourceAttribution selectedProductClass={selectedProductClass} />
        <NutritionList
          className={selectedProductClass}
          selectedProduct={selectedProduct}
          totalServingTitle={'Pr. ' + selectedProduct.properties.serving + 'g'}
        />
      </section>
    </>
  );
};
export default SelectedProduct;
