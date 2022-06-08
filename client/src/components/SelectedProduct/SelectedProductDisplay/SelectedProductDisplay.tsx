import { FC } from 'react';
import { IProducts } from '../../../Interfaces/Products';

interface SelectedProductDisplayProps {
  selectedProduct: IProducts;
}

const SelectedProductDisplay: FC<SelectedProductDisplayProps> = ({
  selectedProduct,
}) => {
  return (
    <>
      <div className="selected-product__title">
        <img className="selected-product__title__logo" src="" alt="" />
        <h2 className="selected-product__title__name">
          {selectedProduct.name}
        </h2>
        <h3 className="selected-product__title__brand">
          {selectedProduct.description}
        </h3>
      </div>
    </>
  );
};

export default SelectedProductDisplay;
