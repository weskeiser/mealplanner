interface ICarbs {
  total: number;
  sugars?: number;
}

interface IMacros {
  fat: number;
  protein: number;
  carbs: ICarbs;
}

interface IProperties {
  brand?: string;
  calories: number;
  salt?: number;
  macros: IMacros;
}

export interface IProducts {
  id: number;
  name: string;
  category: string;
  properties: IProperties;
}

export interface IProductsDisplayed {
  productsDisplayed: IProducts;
}
