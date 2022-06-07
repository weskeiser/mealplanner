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

function App() {
  // Refs
  const servingInputRef = useRef<HTMLInputElement | undefined>();

  // States
  const [selectedProduct, setSelectedProduct] = useState<IProducts>({
    id: 2,
    name: 'Kjøttdeig 14%',
    category: 'Kjøtt',
    properties: {
      brand: 'Gilde',
      logo: 'https://bilder.kolonial.no/local_products/c5db60d1-8bb0-498d-b99c-b333815cc9a9.jpeg?auto=format&fit=max&w=376&s=4740d15034cec94697dc5f5b57e5b357',
      serving: 100,
      calories: 194,
      macros: {
        fat: 14,
        protein: 17,
        carbs: {
          total: 0,
          sugars: 0,
        },
      },
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
  useEffect(() => {
    fetch('./documents/newfile.json')
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then((data) => setData1(data));
  }, []);

  // const Extract = ({ data1 }) => {
  //   let newJson;
  //   if (data1) {
  //     const newData = data1.map((d) => {
  //       if (d) {
  //         const productTitle = d.product.split(',');
  //         const name = d.product.split(',')[0];
  //         const desc2 = productTitle.slice(1, productTitle.length).join(',');
  //         const desc = desc2.startsWith(' ') ? desc2.slice(1) : desc2;

  //         const floatParser = (value) => {
  //           if (parseFloat(value)) {
  //             return parseFloat(value);
  //           } else if (value === 'M') {
  //             return 'unknown';
  //           } else {
  //             return value;
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
  //               fiber: floatParser(d.fiber),
  //               salt: floatParser(d.salt),
  //             },
  //           },
  //         };
  //         // console.log(floatParser(d.cholesterol));
  //         return newObject;
  //       }
  //       return;
  //     });

  //     newJson = JSON.stringify(newData);
  //   } else {
  //     newJson = '';
  //   }

  //   return <p>{newJson}</p>;
  // };

  return (
    <main>
      <h1 className="page-title">Måltidsplanlegger</h1>
      <SearchSection
        setSelectedProductOriginalServing={setSelectedProductOriginalServing}
        setSelectedProduct={setSelectedProduct}
        servingInputRef={servingInputRef}
      />
      <AddCustomProduct setSelectedProduct={setSelectedProduct} />
      <SelectedProduct selectedProduct={selectedProduct} />
      <AddToMealplan
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        mealPlans={mealPlans}
        setMealPlans={setMealPlans}
        servingInputRef={servingInputRef}
        selectedProductOriginalServing={selectedProductOriginalServing}
        setSelectedProductOriginalServing={setSelectedProductOriginalServing}
      />
      <Mealplan mealPlans={mealPlans} setMealPlans={setMealPlans} />
    </main>
  );
}

export default App;
