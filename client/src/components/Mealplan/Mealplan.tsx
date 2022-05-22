import Imealplans from '../../Interfaces/Mealplans';
import AddedProductsDropdown from '../AddedProductsDropdown/AddedProductsDropdown';

interface IMealplan {
  mealplans: Imealplans[];
}

const Mealplan = ({ mealplans }: IMealplan) => {
  const allMealplans = mealplans.map((mealplan) => (
    <AddedProductsDropdown mealplan={mealplan} />
  ));

  return <>{allMealplans}</>;
};

export default Mealplan;
