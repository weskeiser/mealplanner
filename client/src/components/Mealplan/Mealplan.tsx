import Imealplans from '../../Interfaces/Mealplans';
import AddedProductsList from '../AddedProductsList/AddedProductsList';

interface IMealplan {
  mealplans: Imealplans[];
}

const Mealplan = ({ mealplans }: IMealplan) => {
  const allMealplans = mealplans.map((mealplan) => (
    <AddedProductsList mealplan={mealplan} />
  ));

  return <>{allMealplans}</>;
};

export default Mealplan;
