import { useRef, useState } from 'react';
import './styles/App.css';

import SearchBar from './components/SearchBar/SearchBar';

import SearchResults from './components/SearchResults/SearchResults';
import { IProducts } from './Interfaces/Products';
import AddToMealplan from './components/AddToMealplan/AddToMealplan';
import NutritionList from './components/NutritionList/NutritionList';

import hideSearchResults from './components/utils/hideSearchResults';
import NutritionTitleBar from './components/NutritionTitleBar/NutritionTitleBar';
import AddCustomProduct from './components/AddCustomProduct/AddCustomProduct';
import SelectedProductTitle from './components/SelectedProductTitle/SelectedProductTitle';
import Mealplan from './components/Mealplan/Mealplan';
import { IMealplans } from './Interfaces/Mealplans';

function App() {
  // Refs
  const searchBarRef = useRef<HTMLInputElement | undefined>();
  const gramInputRef = useRef<HTMLInputElement | undefined>();
  const searchResultsRef = useRef<HTMLUListElement | undefined>();

  // States
  const [selectedProduct, setSelectedProduct] = useState<IProducts>({
    // id: 0,
    // name: 'None',
    // category: 'None',
    // properties: {
    //   brand: 'None',
    //   logo: '',
    //   serving: 100,
    //   calories: 0,
    //   macros: {
    //     fat: 0,
    //     protein: 0,
    //     carbs: {
    //       total: 0,
    //       sugars: 0,
    //     },
    //   },
    //   salt: 0,
    // },
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
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResultsContents, setSearchResultsContents] = useState<
    IProducts[]
  >([]);
  const [focusedSearchResult, setFocusedSearchResult] = useState(0);
  const [allChosenProducts, setAllChosenProducts] = useState<IProducts[]>([]);
  const [currentProduct, setCurrentProduct] = useState<IProducts | {}>({});
  const [highlighted, setHighlighted] = useState(false);

  const temp = useRef([
    'Mandag',
    'Tirsdag',
    'Onsdag',
    'Torsdag',
    'Fredag',
    'Lørdag',
    'Søndag',
  ]);
  const [mealPlans, setMealPlans] = useState<IMealplans[]>(
    temp.current.map((day) => ({
      listName: `${day}`,
      meals: [
        {
          listName: 'Måltid 1',
          products: [],
        },
        {
          listName: 'Bla',
          products: [],
        },
      ],
    }))
  );

  // Classnames
  const selectedProductClass = 'selected-product';

  return (
    <div
      className="page"
      onClick={(e) =>
        hideSearchResults(
          e,
          searchTerm,
          searchBarRef,
          setCurrentProduct,
          setSearchTerm,
          setFocusedSearchResult
        )
      }
    >
      <div className="header"></div>
      <h1 className="page-title">Næringsinnholdkalkulator</h1>
      <SearchBar
        searchBarRef={searchBarRef}
        searchResultsRef={searchResultsRef}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSearchResultsContents={setSearchResultsContents}
        focusedSearchResult={focusedSearchResult}
        setFocusedSearchResult={setFocusedSearchResult}
        setCurrentProduct={setCurrentProduct}
      />
      <SearchResults
        ref={searchResultsRef}
        searchTerm={searchTerm}
        searchResultsContents={searchResultsContents}
        setSelectedProduct={setSelectedProduct}
        setSearchTerm={setSearchTerm}
        searchBarRef={searchBarRef}
        gramInputRef={gramInputRef}
        setCurrentProduct={setCurrentProduct}
        focusedSearchResult={focusedSearchResult}
        setFocusedSearchResult={setFocusedSearchResult}
        highlighted={highlighted}
        setHighlighted={setHighlighted}
      />
      <AddCustomProduct
        allChosenProducts={allChosenProducts}
        setAllChosenProducts={setAllChosenProducts}
      />
      <hr className="selected-product__divider--upper dividers" />
      <div className={selectedProductClass}>
        <SelectedProductTitle selectedProduct={selectedProduct} />
        <NutritionTitleBar selectedProduct={selectedProduct} />
        <NutritionList
          className={selectedProductClass + '__nutrition-list'}
          selectedProduct={selectedProduct}
          additionalKeys={''}
        />
        <AddToMealplan
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          mealPlans={mealPlans}
          setMealPlans={setMealPlans}
          className={selectedProductClass}
          gramInputRef={gramInputRef}
          currentProduct={currentProduct}
          setCurrentProduct={setCurrentProduct}
        />
      </div>
      <hr className="mealPlan__divider--upper dividers" />
      <Mealplan mealPlans={mealPlans} setMealPlans={setMealPlans} />
    </div>
  );
}

export default App;
