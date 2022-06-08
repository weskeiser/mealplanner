import { useRef, useState } from 'react';
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
