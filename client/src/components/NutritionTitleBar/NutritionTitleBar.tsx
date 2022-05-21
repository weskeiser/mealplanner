import { IProducts } from '../../Interfaces/Products';
import GramInput from '../GramInput/GramInput';

interface INutritionTitleBar {
  selectedProduct: IProducts;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProducts>>;
}

const NutritionTitleBar = ({
  selectedProduct,
  setSelectedProduct,
}: INutritionTitleBar) => {
  return (
    <>
      <div className="selected-product__nutrition-list__heading">
        <h3>Næringsinnhold</h3>
        <div>
          Pr.{' '}
          <GramInput
            className="selected-product__nutrition-list__heading__gram-input"
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
          g
        </div>
      </div>
    </>
  );
};

export default NutritionTitleBar;
