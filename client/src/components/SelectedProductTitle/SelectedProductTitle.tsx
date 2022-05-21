import { IProducts } from '../../Interfaces/Products';

interface ISelectedProductTitle {
  selectedProduct: IProducts;
}

const SelectedProductTitle = ({ selectedProduct }: ISelectedProductTitle) => {
  return (
    <div className="selected-product__title">
      <img src={selectedProduct.properties.logo} alt="" />
      <h2>{selectedProduct.name},</h2>
      <h3>{selectedProduct.properties.brand}</h3>
    </div>
  );
};

export default SelectedProductTitle;
