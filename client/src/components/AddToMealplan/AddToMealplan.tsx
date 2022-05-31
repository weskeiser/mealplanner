import { IMeal, IMealplans } from '../../Interfaces/Mealplans';
import { IProducts } from '../../Interfaces/Products';
import ServingInput from './ServingInput/ServingInput';
import {
  FC,
  useRef,
  useState,
  MutableRefObject,
  Dispatch,
  useEffect,
} from 'react';
import addProductToMeal from './addProductToMeal';
import SelectMealplan from './SelectMealplan/SelectMealplan';

interface IAddToMealplan {
  className: string;
  selectedProduct: IProducts;
  setSelectedProduct: Dispatch<React.SetStateAction<IProducts>>;
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<React.SetStateAction<IMealplans[]>>;
  servingInputRef: MutableRefObject<HTMLInputElement | undefined>;
  currentProduct: IProducts | {};
  setCurrentProduct: Dispatch<React.SetStateAction<IProducts>>;
}
const AddToMealplan: FC<IAddToMealplan> = ({
  className,
  selectedProduct,
  mealPlans,
  setMealPlans,
  setSelectedProduct,
  currentProduct,
  setCurrentProduct,
  servingInputRef,
}) => {
  const selectMealplanDayRef = useRef<HTMLSelectElement | undefined>();
  const selectMealplanMealRef = useRef<HTMLSelectElement | undefined>();

  const [existsErrorMessage, setExistsErrorMessage] = useState('');

  const [mealNamesList, setMealNamesList] = useState(['Måltid 1', 'Måltid 2']);
  const [dayNamesList, setDayNamesList] = useState([
    'Mandag',
    'Tirsdag',
    'Onsdag',
    'Torsdag',
    'Fredag',
    'Lørdag',
    'Søndag',
  ]);

  const [firstRenderDone, setFirstRenderDone] = useState(false);

  useEffect(() => {
    if (!firstRenderDone) {
      setFirstRenderDone(true);
    }

    if (firstRenderDone) {
      const newListName = dayNamesList[dayNamesList.length - 1];
      const alreadyExists = mealPlans.some((mealPlan) => {
        return mealPlan.listName === newListName;
      });

      if (alreadyExists) return;

      const newMealPlanDay = {
        listName: `${newListName}`,
        meals: [
          {
            listName: 'Måltid 1',
            products: [],
          },
        ],
      };
      const updatedMealPlan = mealPlans.concat(newMealPlanDay);
      setMealPlans(updatedMealPlan);
    }
  }, [dayNamesList]);

  useEffect(() => {
    if (!firstRenderDone) {
      setFirstRenderDone(true);
    }

    if (firstRenderDone) {
      const newListName = mealNamesList[mealNamesList.length - 1];

      const alreadyExists = mealPlans.some((mealPlan) => {
        return mealPlan.meals.some((meal: IMeal) => {
          return meal.listName === newListName;
        });
      });
      if (alreadyExists) return;

      const newMealPlanContents = mealPlans.map((mealPlan) => {
        return {
          ...mealPlan,
          meals: [
            ...mealPlan.meals,
            {
              listName: newListName,
              products: [],
            },
          ],
        };
      });

      setMealPlans(newMealPlanContents);
    }
  }, [mealNamesList]);

  return (
    <>
      <form id="addToList" className={className + '__add-to-list'}>
        <SelectMealplan
          className={className}
          listNames={dayNamesList}
          setListNames={setDayNamesList}
          ref={selectMealplanDayRef}
          name="selectDay"
        />
        <ServingInput
          ref={servingInputRef}
          className={className + '__add-to-list__serving'}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          currentProduct={currentProduct}
          setCurrentProduct={setCurrentProduct}
          mealPlans={mealPlans}
          setMealPlans={setMealPlans}
          setExistsErrorMessage={setExistsErrorMessage}
          selectMealplanMealRef={selectMealplanMealRef}
          selectMealplanDayRef={selectMealplanDayRef}
        />
        <SelectMealplan
          className={className}
          listNames={mealNamesList}
          setListNames={setMealNamesList}
          ref={selectMealplanMealRef}
          name="selectMeal"
        />
        <button
          formTarget="addToList"
          className={className + '__add-to-list__add'}
          onClick={(e) =>
            addProductToMeal(
              e,
              selectedProduct,
              mealPlans,
              setMealPlans,
              setExistsErrorMessage,
              selectMealplanMealRef,
              selectMealplanDayRef
            )
          }
        >
          Legg til
        </button>
      </form>
      <p className={className + '__add-to-list__error'}>{existsErrorMessage}</p>
    </>
  );
};

export default AddToMealplan;
