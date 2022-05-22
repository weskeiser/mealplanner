import { useState } from 'react';
import Imealplans from '../../Interfaces/Mealplans';
import AddedProducts from '../AddedProducts/AddedProducts';

interface IAddedProductsList {
  mealplan: Imealplans;
}

const AddedProductsList = ({ mealplan }: IAddedProductsList) => {
  const [hidden, setHidden] = useState<Boolean>(true);

  const { listName } = mealplan;

  const openList = () => {
    setHidden(!hidden);
  };

  const decideVisibility = hidden ? 'hidden' : '';
  return (
    <>
      <div className="added-products-list">
        <h2 className="added-products-list__title">{listName}</h2>
        <div className="added-products-list__arrow__outter" onClick={openList}>
          <div className="added-products-list__arrow__inner"></div>
        </div>
      </div>

      <div className={decideVisibility}>
        <AddedProducts mealplan={mealplan} />
      </div>

      <hr className="added-products-list__divider--lower dividers" />
    </>
  );
};

export default AddedProductsList;
