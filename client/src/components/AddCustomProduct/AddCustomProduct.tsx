import { FC, useState } from 'react';
import { IProducts } from '../../Interfaces/Products';
import ListItem from '../ListItem';

interface IAddCustomProduct {}

const AddCustomProduct: FC<IAddCustomProduct> = ({}) => {
  const [visible, setVisible] = useState(false);

  const toggleFormHidden = () => {
    setVisible(!visible);
  };

  // const addCustomProduct = (
  //   e: React.MouseEvent<HTMLDivElement, MouseEvent>
  // ) => {
  //   e.preventDefault();
  //   const mealPlanDayName = 'Monday';
  //   const mealPlanMealName =  'Måltid 1';

  //   const newProduct = {
  //     ...selectedProduct,
  //     mealPlanDay: selectMealplanDayRef.current.value,
  //     mealPlanMeal: selectMealplanMealRef.current.value,
  //   };

  //   const updatedMealplan = mealPlans.map((mealPlan) => {
  //     if (mealPlan.listName === mealPlanDayName) {
  //       return {
  //         ...mealPlan,
  //         meals: mealPlan.meals.map((meal) => {
  //           if (meal.listName === mealPlanMealName) {
  //             return { ...meal, products: [...meal.products, newProduct] };
  //           }
  //           return meal;
  //         }),
  //       };
  //     }
  //     return mealPlan;
  //   });
  //   setMealPlans(updatedMealplan);
  // };

  const addCustomProduct = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const inputNames = [
    'Kalorier',
    'Fett',
    'Proteiner',
    'Karbohydrater',
    '- Hvorav sukkerarter',
    'Salt',
    'Antall Gram',
  ];

  const KeyAndInput = () => {
    // const keyAndInput = (key) => {
    //   return (
    //     <>
    //       <p>{key}</p>
    //       <input type="text" name={key} placeholder="" />
    //     </>
    //   );
    // };

    return inputNames.map((key) => (
      <ListItem
        className="custom-product__form__list__input"
        children={
          <>
            <p>{key}</p>
            <input type="text" name={key} placeholder="" />
          </>
        }
      />
    ));
  };

  // const inputList = inputNames.map((key) => (
  //   <ul>
  //     <ListItem className="custom-product__input" children={keyAndInput(key)} />;
  //   </ul>
  // ));

  return (
    <div className="custom-product">
      <button
        className="custom-product__initializer"
        onClick={toggleFormHidden}
      >
        Legg til egendefinert
      </button>
      {visible && (
        <form className="custom-product__form">
          <ul className="custom-product__form__list">
            {inputNames.map((key) => (
              <ListItem
                className="custom-product__form__list__input"
                key={key}
                children={
                  <>
                    <p>{key}</p>
                    <input type="text" name={key} placeholder="" />
                  </>
                }
              />
            ))}
          </ul>
          <input type="text" placeholder="Matvarenavn" />
          <button type="button" onClick={(e) => addCustomProduct(e)}>
            Legg til
          </button>
        </form>
      )}
    </div>
  );
};

export default AddCustomProduct;
