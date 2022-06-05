import { FC } from 'react';
import { IProducts } from '../../Interfaces/Products';

interface SelectedProductDisplayProps {
  selectedProduct: IProducts;
}

const SelectedProductDisplay: FC<SelectedProductDisplayProps> = ({
  selectedProduct,
}) => {
  return (
    <>
      <div className="selected-product__title">
        <img
          className="selected-product__title__logo"
          src={selectedProduct.properties.logo}
          alt=""
        />
        <h2 className="selected-product__title__name">
          {selectedProduct.name}
        </h2>
        <h3 className="selected-product__title__brand">
          {selectedProduct.properties.brand}
        </h3>
      </div>
    </>
  );
};

export default SelectedProductDisplay;
