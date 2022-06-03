import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { IMeal, IMealplans } from '../../../../Interfaces/Mealplans';
import SelectMealplan from './SelectMealplan/SelectMealplan';

interface IMealplanSelecters {
  className: string;
  mealPlans: IMealplans[];
  setMealPlans: Dispatch<SetStateAction<IMealplans[]>>;
}

const MealplanSelecters: FC<IMealplanSelecters> = ({
  className,
  mealPlans,
  setMealPlans,
}) => {
  const [mealNamesList, setMealNamesList] = useState<string[]>([
    'Måltid 1',
    'Måltid 2',
    'Måltid 3',
    // 'Måltid 4',
    // 'Måltid 5',
    // 'Måltid 6',
  ]);
  const [dayNamesList, setDayNamesList] = useState<string[]>([
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
      <SelectMealplan
        className={className}
        listNames={dayNamesList}
        name="selectDay"
        mealNamesList={mealNamesList}
        setMealNamesList={setMealNamesList}
      />
      <hr />
      <SelectMealplan
        className={className}
        listNames={mealNamesList}
        name="selectMeal"
        mealNamesList={mealNamesList}
        setMealNamesList={setMealNamesList}
      />
      <hr />
    </>
  );
};

export default MealplanSelecters;
