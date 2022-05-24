import { useRef, useState } from 'react';
import useFetchEffect from './hooks/useFetchEffect';
import './styles/App.css';

import SearchBar from './components/SearchBar/SearchBar';

import SearchResults from './components/SearchResults/SearchResults';
import { IProducts } from './Interfaces/Products';
import AddToMealplan from './components/AddToMealplan/AddToMealplan';
import NutritionList from './components/NutritionList/NutritionList';

import showSearchResults from './components/utils/showSearchResults';
import NutritionTitleBar from './components/NutritionTitleBar/NutritionTitleBar';
import AddCustomProduct from './components/AddCustomProduct/AddCustomProduct';
import SelectedProductTitle from './components/SelectedProductTitle/SelectedProductTitle';
import Mealplan from './components/Mealplan/Mealplan';
import { IMealplans } from './Interfaces/Mealplans';

function App() {
  // Refs
  const searchBarRef = useRef();
  const gramInputRef = useRef();
  const selectMealplanDayRef = useRef();
  const selectMealplanMealRef = useRef();

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
  const [searchDropdownContents, setSearchResultsContents] = useState<
    IProducts[]
  >([]);
  const [allChosenProducts, setAllChosenProducts] = useState<IProducts[]>([]);
  // - Used for remembering selectedProduct when GramInput goes to 0.
  const [currentProduct, setCurrentProduct] = useState<IProducts | {}>({});
  // -----

  const [mealPlans, setMealplans] = useState<IMealplans[]>([
    {
      listName: 'Mandag',
      meals: [
        {
          listName: 'Måltid 1',
          products: [
            {
              id: 2,
              mealplanDayName: 'Mandag',
              mealplanMealName: 'Måltid 1',
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
            },
          ],
        },
      ],
    },
    {
      listName: 'Tirsdag',
      meals: [
        {
          listName: 'Måltid 1',
          products: [
            {
              id: 2,
              mealplanDayName: 'Tirsdag',
              mealplanMealName: 'Måltid 1',
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
            },
          ],
        },
      ],
    },
  ]);

  // Custom Hooks
  useFetchEffect(
    'products.json',
    showSearchResults(setSearchResultsContents, searchTerm),
    [searchTerm],
    300
  );

  // Classnames
  const selectedProductClass = 'selected-product';

  return (
    <div className="page">
      <div className="header"></div>
      <h1 className="page-title">Næringsinnholdkalkulator</h1>
      <SearchBar
        setSearchTerm={setSearchTerm}
        setSearchResultsContents={setSearchResultsContents}
        ref={searchBarRef}
      />
      <SearchResults
        searchTerm={searchTerm}
        searchDropdownContents={searchDropdownContents}
        setSelectedProduct={setSelectedProduct}
        setSearchTerm={setSearchTerm}
        searchBarRef={searchBarRef}
        gramInputRef={gramInputRef}
        setCurrentProduct={setCurrentProduct}
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
        />
        <AddToMealplan
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          mealPlans={mealPlans}
          setMealplans={setMealplans}
          setAllChosenProducts={setAllChosenProducts}
          className={selectedProductClass}
          gramInputRef={gramInputRef}
          currentProduct={currentProduct}
          setCurrentProduct={setCurrentProduct}
          selectMealplanDayRef={selectMealplanDayRef}
          selectMealplanMealRef={selectMealplanMealRef}
        />
      </div>
      <hr className="mealPlan__divider--upper dividers" />
      <Mealplan mealPlans={mealPlans} setMealplans={setMealplans} />
    </div>
  );
}

export default App;
