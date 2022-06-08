import { useEffect, useRef, useState } from 'react';
import './styles/App.css';

import { IProducts } from './Interfaces/Products';
import { IMealplans } from './Interfaces/Mealplans';
import AddCustomProduct from './components/SelectCustomProduct/SelectCustomProduct';
import SearchSection from './components/SearchSection/SearchSection';
import SelectedProduct from './components/SelectedProduct/SelectedProduct';
import Mealplan from './components/Mealplan/Mealplan';
import AddToMealplan from './components/AddToMealplan/AddToMealplan';
import daysOfTheWeek from './components/helpers/daysOfTheWeek';
import { getNutritionProps } from './components/Mealplan/Mealplans/Day/helpers/getDailyTotalNutrition';

function App() {
  // Refs
  const servingInputRef = useRef<HTMLInputElement | undefined>();

  // States
  const [selectedProduct, setSelectedProduct] = useState<
    IProducts | getNutritionProps
  >({
    id: 2,
    name: 'Kjøttdeig 14%',
    description: 'blabla',
    properties: {
      serving: 100,
      calories: 194,
      macros: {
        fat: {
          total: 14,
          types: {},
          cholesterol: 1,
        },
        protein: 17,
        carbs: {
          total: 0,
          sugar: {
            total: 0,
            added: 0,
          },
        },
      },
      fiber: 1,
      salt: 1.1,
    },
  });
  const [selectedProductOriginalServing, setSelectedProductOriginalServing] =
    useState<IProducts | {}>({});
  const [mealPlans, setMealPlans] = useState<IMealplans[]>(
    daysOfTheWeek.map((day) => ({
      listName: `${day}`,
      meals: [
        {
          listName: 'Måltid 1',
          products: [],
        },
        {
          listName: 'Måltid 2',
          products: [],
        },
        {
          listName: 'Måltid 3',
          products: [],
        },
      ],
    }))
  );

  const [data1, setData1] = useState();
  const [vitaData, setVitaData] = useState();

  useEffect(() => {
    fetch('./documents/newfile.json')
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then((data) => setData1(data));
  }, []);

  useEffect(() => {
    fetch('./documents/vitamins.json')
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then((data) => setVitaData(data));
  }, []);

  const Extract = ({ vitaData }) => {
    let newJson;
    let idList = [];

    if (data1) {
      data1.map((product) => {
        if (product !== null) {
          idList.push(product.id);
        }
      });
    }

    if (vitaData) {
      const newData = vitaData.filter((d) => {
        return idList.includes(d.id);
      });

      const parsedData = newData.map((d) => {
        const floatParser = (value) => {
          let value2;
          if (value && value.toString().includes(',')) {
            value2 = value.split(',').join('.');
          } else value2 = value;

          if (parseFloat(value2)) {
            return parseFloat(value2);
          } else if (value === 'M') {
            return 'unknown';
          } else if (parseInt(value)) {
            return parseInt(value);
          } else {
            console.log(d);
            return 0;
          }
        };

        // const { id, product, ...rest } = d;

        const newObject = {
          id: parseFloat(d.id),
          vitamins: {
            omega3: floatParser(d.omega3),
            omega6: floatParser(d.omega6),
            vitaminA: floatParser(d.vitaminA),
            retinol: floatParser(d.retinol),
            betacarotene: floatParser(d.betacarotene),
            vitaminD: floatParser(d.vitaminD),
            vitaminE: floatParser(d.vitaminE),
            thiamine: floatParser(d.thiamine),
            riboflavin: floatParser(d.riboflavin),
            nicain: floatParser(d.nicain),
            vitaminB6: floatParser(d.vitaminB6),
            folate: floatParser(d.folate),
            vitaminB12: floatParser(d.vitamineB12),
            vitaminC: floatParser(d.vitamineC),
            calcium: floatParser(d.calcium),
            iron: floatParser(d.iron),
            sodium: floatParser(d.sodium),
            potassium: floatParser(d.potassium),
            magnesium: floatParser(d.magnesium),
            zinc: floatParser(d.zinc),
            selenium: floatParser(d.selenium),
            copper: floatParser(d.copper),
            phosphorus: floatParser(d.phosphorus),
            iodine: floatParser(d.iodine),
          },
        };

        return newObject;
      });
      console.log(parsedData.length);
      newJson = JSON.stringify(parsedData);
    }

    return <p>{newJson}</p>;
  };

  // const Extract = ({ data1 }) => {
  //   let newJson;
  //   if (data1) {
  //     const newData = data1.map((d, index) => {
  //       if (d === null) {
  //         return;
  //       }
  //       if (d) {
  //         const productTitle = d.product.split(',');
  //         const name = d.product.split(',')[0];
  //         const desc2 = productTitle.slice(1, productTitle.length).join(',');
  //         const desc = desc2.startsWith(' ') ? desc2.slice(1) : desc2;

  //         const floatParser = (value) => {
  //           let value2;
  //           if (value.toString().includes(',')) {
  //             value2 = value.split(',').join('.');
  //           } else value2 = value;

  //           if (parseFloat(value2)) {
  //             return parseFloat(value2);
  //           } else if (value === 'M') {
  //             return 'unknown';
  //           } else if (parseInt(value)) {
  //             return parseInt(value);
  //           } else {
  //             return 0;
  //           }
  //         };

  //         const newObject = {
  //           id: parseFloat(d.id),
  //           name: name,
  //           description: desc,
  //           properties: {
  //             serving: 100,
  //             calories: floatParser(d.calories),
  //             macros: {
  //               fat: {
  //                 total: floatParser(d.fat),
  //                 types: {
  //                   saturated: floatParser(d.saturated),
  //                   trans: floatParser(d.trans),
  //                   monounsaturated: floatParser(d.monounsaturated),
  //                   polyunsaturated: floatParser(d.polyunsaturated),
  //                 },
  //                 cholesterol: floatParser(d.cholesterol),
  //               },
  //               protein: floatParser(d.protein),
  //               carbs: {
  //                 total: floatParser(d.total),
  //                 sugar: {
  //                   total: floatParser(d.total),
  //                   added: floatParser(d.added),
  //                 },
  //               },
  //             },
  //             fiber: floatParser(d.fiber),
  //             salt: floatParser(d.salt),
  //             source: 'matvaretabellen',
  //           },
  //         };
  //         // console.log(floatParser(d.cholesterol));
  //         return newObject;
  //       } else {
  //         console.log(d);
  //       }
  //       return undefined;
  //     });

  //     newJson = JSON.stringify(newData);
  //   } else {
  //     newJson = '';
  //   }

  //   return <p>{newJson}</p>;
  // };

  return (
    // <main>
    //   <h1 className="page-title">Måltidsplanlegger</h1>
    //   <SearchSection
    //     setSelectedProductOriginalServing={setSelectedProductOriginalServing}
    //     setSelectedProduct={setSelectedProduct}
    //     servingInputRef={servingInputRef}
    //   />
    //   <AddCustomProduct setSelectedProduct={setSelectedProduct} />
    //   <SelectedProduct selectedProduct={selectedProduct} />
    //   <AddToMealplan
    //     selectedProduct={selectedProduct}
    //     setSelectedProduct={setSelectedProduct}
    //     mealPlans={mealPlans}
    //     setMealPlans={setMealPlans}
    //     servingInputRef={servingInputRef}
    //     selectedProductOriginalServing={selectedProductOriginalServing}
    //     setSelectedProductOriginalServing={setSelectedProductOriginalServing}
    //   />
    //   <Mealplan mealPlans={mealPlans} setMealPlans={setMealPlans} />
    // </main>
    <Extract data1={data1} vitaData={vitaData} />
  );
}

export default App;
