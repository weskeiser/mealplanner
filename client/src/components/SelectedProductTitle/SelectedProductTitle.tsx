import { FC } from 'react';
import { IProducts } from '../../Interfaces/Products';

interface ISelectedProductTitle {
  selectedProduct: IProducts;
}

const SelectedProductTitle: FC<ISelectedProductTitle> = ({
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
        <div>
          <h2 className="selected-product__title__name">
            {selectedProduct.name}
          </h2>
          <h3 className="selected-product__title__brand">
            {selectedProduct.properties.brand}
          </h3>
        </div>
      </div>
    </>
  );
};

export default SelectedProductTitle;
