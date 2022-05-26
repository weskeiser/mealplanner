import { IMealplans } from '../../Interfaces/Mealplans';
import { IProducts } from '../../Interfaces/Products';
import GramInput from './GramInput/GramInput';
import {
  FC,
  useRef,
  useState,
  MutableRefObject,
  Dispatch,
  useEffect,
  useMemo,
} from 'react';
import addProductToMeal from './addProductToMeal';
import SelectMealplan from './SelectMealplan/SelectMealplan';

interface IAddToMealplan {
  className: string;
  selectedProduct: IProducts;
  setSelectedProduct: Dispatch<React.SetStateAction<IProducts>>;
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<React.SetStateAction<IMealplans[]>>;
  gramInputRef: MutableRefObject<HTMLInputElement | undefined>;
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
  gramInputRef,
}) => {
  const selectMealplanDayRef = useRef<HTMLSelectElement | undefined>();
  const selectMealplanMealRef = useRef<HTMLSelectElement | undefined>();

  const [errorMessage, setErrorMessage] = useState('');

  const [mealNamesList, setMealNamesList] = useState([
    'Måltid 1',
    'Måltid 2',
    'Måltid 3',
    'Måltid 4',
  ]);

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

  return (
    <div className={className + '__add-to-list'}>
      <SelectMealplan
        className={className}
        listNames={dayNamesList}
        setListNames={setDayNamesList}
        ref={selectMealplanDayRef}
      />
      <GramInput
        ref={gramInputRef}
        className={className + '__add-to-list__gram-input'}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
      />
      <SelectMealplan
        className={className}
        listNames={mealNamesList}
        setListNames={setMealNamesList}
        ref={selectMealplanMealRef}
      />
      <button
        className={className + '__add-to-list__add'}
        onClick={(e) =>
          addProductToMeal(
            e,
            selectedProduct,
            mealPlans,
            setMealPlans,
            setErrorMessage,
            selectMealplanMealRef,
            selectMealplanDayRef
          )
        }
      >
        Legg til
      </button>
      {true && (
        <p className={className + '__add-to-list__error'}>{errorMessage}</p>
      )}
    </div>
  );
};

export default AddToMealplan;
