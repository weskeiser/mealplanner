import { IProducts } from '../../Interfaces/Products';

interface ISelectedProductTitle {
  selectedProduct: IProducts;
}

const SelectedProductTitle = ({ selectedProduct }: ISelectedProductTitle) => {
  return (
    <>
      <div className="selected-product__title">
        <img src={selectedProduct.properties.logo} alt="" />
        <h2>{selectedProduct.name},</h2>
        <h3>{selectedProduct.properties.brand}</h3>
      </div>
      <div className="selected-product__nutrition-list__heading">
        <h3>Næringsinnhold</h3>
        <h3>Pr. {selectedProduct.properties.serving}g</h3>
      </div>
    </>
  );
};

export default SelectedProductTitle;
