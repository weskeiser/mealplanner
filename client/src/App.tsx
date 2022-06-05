import { useRef, useState } from 'react';
import './styles/App.css';

import { IProducts } from './Interfaces/Products';
import AddCustomProduct from './components/AddCustomProduct/AddCustomProduct';
import { IMealplans } from './Interfaces/Mealplans';
import SearchSection from './components/SearchSection/SearchSection';
import SelectedProduct from './components/SelectedProduct/SelectedProduct';
import Mealplan from './components/Mealplan/Mealplan';
import AddToMealplan from './components/AddToMealplan/AddToMealplan';
import Main from './components/Main/Main';

function App() {
  // Refs
  const searchBarRef = useRef<HTMLInputElement | undefined>();
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
  const [currentProduct, setCurrentProduct] = useState<IProducts | {}>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [focusedSearchResult, setFocusedSearchResult] = useState(0);

  const dayNamesList = [
    'Mandag',
    'Tirsdag',
    'Onsdag',
    'Torsdag',
    'Fredag',
    'Lørdag',
    'Søndag',
  ];

  const [mealPlans, setMealPlans] = useState<IMealplans[]>(
    dayNamesList.map((day) => ({
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
    <Main
      searchTerm={searchTerm}
      searchBarRef={searchBarRef}
      setCurrentProduct={setCurrentProduct}
      setSearchTerm={setSearchTerm}
      setFocusedSearchResult={setFocusedSearchResult}
    >
      <h1 className="page-title">Måltidsplanlegger</h1>
      <SearchSection
        searchBarRef={searchBarRef}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        focusedSearchResult={focusedSearchResult}
        setFocusedSearchResult={setFocusedSearchResult}
        setCurrentProduct={setCurrentProduct}
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
        className={'add-to-mealplan'}
        servingInputRef={servingInputRef}
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
        dayNamesList={dayNamesList}
      />
      <Mealplan mealPlans={mealPlans} setMealPlans={setMealPlans} />
    </Main>
  );
}

export default App;
