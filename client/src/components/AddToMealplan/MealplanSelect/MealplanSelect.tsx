import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { IMeal, IMealplans } from '../../../Interfaces/Mealplans';
import SelectMealplan from './SelectMealplan/SelectMealplan';

interface MealplanSelectProps {
  className: string;
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<SetStateAction<IMealplans[]>>;
  daysOfTheWeek: string[];
}

const MealplanSelect: FC<MealplanSelectProps> = ({
  className,
  mealPlans,
  setMealPlans,
  daysOfTheWeek,
}) => {
  const [mealNames, setMealNames] = useState<string[]>([
    'Måltid 1',
    'Måltid 2',
    'Måltid 3',
  ]);

  const [firstRenderDone, setFirstRenderDone] = useState(false);

  useEffect(() => {
    if (!firstRenderDone) {
      setFirstRenderDone(true);
    }

    if (firstRenderDone) {
      const newListName = mealNames[mealNames.length - 1];

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
  }, [mealNames]);

  return (
    <>
      <SelectMealplan
        name="selectDay"
        className={className}
        listNames={daysOfTheWeek}
        mealNames={mealNames}
        setMealNames={setMealNames}
      />
      <hr />
      <SelectMealplan
        name="selectMeal"
        className={className}
        listNames={mealNames}
        mealNames={mealNames}
        setMealNames={setMealNames}
      />
      <hr />
    </>
  );
};

export default MealplanSelect;
