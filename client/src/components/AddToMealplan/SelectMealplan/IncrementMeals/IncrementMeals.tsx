import { Dispatch, FC, SetStateAction } from 'react';

interface IIncrementMeals {
  setMealNamesList: Dispatch<SetStateAction<string[]>>;
  mealNamesList: string[];
}

const IncrementMeals: FC<IIncrementMeals> = ({
  mealNamesList,
  setMealNamesList,
}) => {
  // const addNewList = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   e.preventDefault();
  //   const newListInputEl = e.target.parentElement.addNewListName;

  //   if (newListInputEl) {
  //     if (newListInputEl.value !== '') {
  //       const alreadyExists = listNames.some((name) => {
  //         return name === newListInputEl.value;
  //       });
  //       if (alreadyExists) {
  //         setInputVisible((inputVisible) => !inputVisible);
  //         setMessageAndColor(['Listen eksisterer', 'red']);
  //         return;
  //       }

  //       setListNames((listNames) => listNames.concat(newListInputEl.value));
  //       setMessageAndColor(['Ny liste lagt til', 'green']);
  //     }
  //   }
  //   setInputVisible(!inputVisible);

  //   if (!newListInputEl) {
  //     setMessageAndColor([]);
  //   }
  // };

  const incrementMeals = (e, type) => {
    e.preventDefault();

    if (type === 'increment' && mealNamesList.length < 6) {
      const nextMeal = mealNamesList.length + 1;
      const newMealNamesList = [...mealNamesList, `Måltid ${nextMeal}`];
      setMealNamesList(newMealNamesList);
      console.log(mealNamesList.length);
    }

    if (type === 'decrement' && mealNamesList.length > 1) {
      const newMealNamesList = mealNamesList.slice(0, mealNamesList.length - 1);
      setMealNamesList(newMealNamesList);
    }
  };

  return (
    <div className="selected-product__add-to-list__options__increment">
      {/* <button>&#9660;</button>
      <button>&#9650;</button> */}
      <button onClick={(e) => incrementMeals(e, 'decrement')}>-</button>
      <button onClick={(e) => incrementMeals(e, 'increment')}>+</button>
    </div>
  );
};

export default IncrementMeals;
