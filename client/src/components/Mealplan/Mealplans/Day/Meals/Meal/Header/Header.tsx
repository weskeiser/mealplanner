import { FC, useState } from 'react';
import { IMeal } from '../../../../../../../Interfaces/Mealplans';

interface IHeader {
  meal: IMeal;
}

const Header: FC<IHeader> = ({ meal }) => {
  const [visible, setVisible] = useState(true);

  const openList = () => {
    setVisible(!visible);
  };

  const openOrClosed = visible
    ? 'mealPlan__meals__meal__title__toggle__inner mealPlan__meals__meal__title__toggle__inner__make-line'
    : 'mealPlan__meals__meal__title__toggle__inner';

  return (
    <>
      <div className="mealPlan__meals__meal__title">
        <h3 className="mealPlan__meals__meal__title__name">{meal.listName}</h3>
        <button
          className="mealPlan__meals__meal__title__toggle"
          onClick={openList}
        >
          <div className={openOrClosed}></div>
        </button>
      </div>
    </>
  );
};

export default Header;
