import { Dispatch, FC, SetStateAction } from 'react';
import { IMealplans } from '../../../../../Interfaces/Mealplans';

interface IMealplanHeader {
  mealPlan: IMealplans;
  visible: Boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const MealplanHeader: FC<IMealplanHeader> = ({
  mealPlan,
  setVisible,
  visible,
}) => {
  const openList = () => {
    setVisible(!visible);
  };

  const openOrClosed = visible
    ? 'mealPlan__header__title__toggle__inner mealPlan__header__title__toggle__inner__make-line'
    : 'mealPlan__header__title__toggle__inner';

  return (
    <section className="mealPlan__header">
      <h2 className="mealPlan__header__title">{mealPlan.listName}</h2>
      <button
        className="mealPlan__header__title__toggle"
        onClick={openList}
        aria-label="open mealplan day"
      >
        <div className={openOrClosed}></div>
      </button>
    </section>
  );
};

export default MealplanHeader;
