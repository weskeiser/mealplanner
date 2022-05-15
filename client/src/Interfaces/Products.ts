interface ICarbs {
  total: number;
  sugars?: number;
}

interface IMacros {
  fat: number;
  protein: number;
  carbs: ICarbs;
}

export interface IProducts {
  id: number;
  name: string;
  category: string;
  calories: number;
  salt?: number;
  macros: IMacros;
}

// export interface IProducts {
//   id: number;
//   name: string;
//   category: string;
//   calories: number;
//   salt?: number;
//   macros: {
//     fat: number;
//     protein: number;
//     carbs: {
//       total: number;
//       sugars?: number;
//     };
//   };
// }
