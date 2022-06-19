import { Dispatch, FC, SetStateAction } from 'react';
import { IMealplans } from '../../../../../Interfaces/Mealplans';

interface HeaderProps {
  mealPlan: IMealplans;
  visible: Boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ mealPlan, setVisible, visible }) => {
  const openList = () => {
    setVisible(!visible);
  };

  const openOrClosed = visible
    ? 'mealPlan__header__title__toggle__inner mealPlan__header__title__toggle__inner__closed'
    : 'mealPlan__header__title__toggle__inner';

  return (
    <section className="mealPlan__header">
      <h2 className="mealPlan__header__title">{mealPlan.listName}</h2>
      <button
        className="mealPlan__header__title__toggle"
        onClick={openList}
        aria-label="open day"
      >
        <div className={openOrClosed}></div>
      </button>
    </section>
  );
};

export default Header;
