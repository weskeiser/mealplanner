import { IProducts } from '../../Interfaces/Products';
import GramInput from '../GramInput/GramInput';

interface INutritionTitleBar {
  selectedProduct: IProducts;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProducts>>;
  gramInputRef: React.MutableRefObject<undefined>;
  currentProduct: IProducts | {};
  setCurrentProduct: React.Dispatch<React.SetStateAction<IProducts>>;
}

const NutritionTitleBar = ({
  selectedProduct,
  setSelectedProduct,
  gramInputRef,
  currentProduct,
  setCurrentProduct,
}: INutritionTitleBar) => {
  return (
    <>
      <div className="selected-product__nutrition-list__heading">
        <h3>Næringsinnhold</h3>
        <GramInput
          ref={gramInputRef}
          className="selected-product__nutrition-list__heading__gram-input"
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          currentProduct={currentProduct}
          setCurrentProduct={setCurrentProduct}
        />
      </div>
    </>
  );
};

export default NutritionTitleBar;
