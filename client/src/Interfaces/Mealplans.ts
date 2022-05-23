import { IProducts } from './Products';

export interface IMealplans {
  listName: string;
  meals: [
    {
      listName: string;
      products: IProducts[];
    }
  ];
}

export interface IMealplansD {
  mealPlan?: IMealplans;
  mealPlans: IMealplans;
  setMealplans: React.Dispatch<React.SetStateAction<IMealplans>>;
}

export interface IMeal {
  listName: string;
  products: IProducts[];
}

export interface IMealD {
  meal: IMeal;
}
