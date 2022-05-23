import { IProducts } from './Products';

export interface IMealPlans {
  listName: string;
  meals: {
    listName: string;
    products: IProducts[];
  };
}

export interface IMealPlansD {
  mealPlan?: IMealPlans;
  mealPlans: IMealPlans;
  setMealPlans: ;
}

export interface IMeal {
  listName: string;
  products: IProducts[];
}

export interface IMealD {
  meal: IMeal;
}
