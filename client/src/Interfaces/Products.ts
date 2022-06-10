interface ICarbs {
  total: number;
  sugar: {
    total: number;
    added: number;
  };
}

interface IFat {
  total: number;
  types: {
    saturated: number;
    trans: number;
    monounsaturated: number;
    polyunsaturated: number;
  };
  cholesterol: number;
}

interface IMacros {
  fat: IFat;
  protein: number;
  carbs: ICarbs;
}

export interface IProperties {
  source: string;
  serving: number;
  calories: number;
  salt: number;
  fiber: number;
  macros: IMacros;
}

export interface IProducts {
  id: number;
  name: string;
  description: string;
  mealPlanDayName?: string;
  mealPlanMealName?: string;
  properties: IProperties;
}
