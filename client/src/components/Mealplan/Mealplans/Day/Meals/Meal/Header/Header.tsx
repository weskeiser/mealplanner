import { Dispatch, FC, SetStateAction } from 'react';
import { IMeal } from '../../../../../../../Interfaces/Mealplans';

interface HeaderProps {
  meal: IMeal;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ meal, visible, setVisible }) => {
  const openList = () => {
    setVisible(!visible);
  };

  const openOrClosed = visible
    ? 'mealPlan__meals__meal__title__toggle__inner mealPlan__meals__meal__title__toggle__inner__closed'
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
