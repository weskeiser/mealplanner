import { FC } from 'react';
import { IProducts } from '../../Interfaces/Products';

interface INutritionTitleBar {
  selectedProduct: IProducts;
}

const NutritionTitleBar: FC<INutritionTitleBar> = ({ selectedProduct }) => {
  return (
    <>
      <div className="selected-product__nutrition-list__heading">
        <h3 className="selected-product__nutrition-list__heading__title">
          Næringsinnhold
        </h3>
        <p className="selected-product__nutrition-list__heading__serving">
          Pr. {selectedProduct.properties.serving}g
        </p>
      </div>
    </>
  );
};

export default NutritionTitleBar;
