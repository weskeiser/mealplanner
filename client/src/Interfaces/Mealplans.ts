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

export interface IMeal {
  listName: string;
  products: IProducts[];
}
