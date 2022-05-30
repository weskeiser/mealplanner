import { IProducts } from './Products';

export interface IMealplans {
  listName: string;
  meals: {
    listName: string;
    products: IProducts[] | never[];
  }[];
}

export interface IMeal {
  listName: string;
  products: IProducts[] | never[];
}
