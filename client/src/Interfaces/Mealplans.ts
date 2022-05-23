import { IProducts } from './Products';

export interface IMealplan {
  listName: string;
  meals: {
    listName: string;
    products: IProducts[];
  };
}

export interface IMealplanD {
  mealplan: IMealplan;
}

export interface IMeal {
  listName: string;
  products: IProducts[];
}

export interface IMealD {
  meal: IMeal;
}
