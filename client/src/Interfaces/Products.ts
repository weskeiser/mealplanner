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
  logo?: string;
  serving: number;
  calories: number;
  salt?: number;
  macros: IMacros;
}

export interface IProducts {
  id: number;
  name: string;
  category: string;
  grams?: number;
  properties: IProperties;
}
