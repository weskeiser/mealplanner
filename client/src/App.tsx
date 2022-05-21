import { useRef, useState } from 'react';
import useFetchEffect from './hooks/useFetchEffect';
import './styles/App.css';

import SearchBar from './components/SearchBar/SearchBar';

import SearchDropdown from './components/SearchDropdown/SearchDropdown';
import { IProducts } from './Interfaces/Products';
import AddToList from './components/AddToList/AddToList';
import AddedProducts from './components/AddedProducts/AddedProducts';
import NutritionList from './components/NutritionList/NutritionList';

import showSearchDropdown from './components/utils/showSearchDropdown';
import NutritionTitleBar from './components/NutritionTitleBar/NutritionTitleBar';
import AddCustomProduct from './components/AddCustomProduct/AddCustomProduct';
import SelectedProductTitle from './components/SelectedProductTitle/SelectedProductTitle';
import AddedProductsList from './components/AddedProductsList/AddedProductsLists';

function App() {
  // Refs
  const searchBarRef = useRef();
  const gramInputRef = useRef();

  // States
  const [selectedProduct, setSelectedProduct] = useState<IProducts>({
    id: 0,
    name: 'None',
    category: 'None',
    properties: {
      brand: 'None',
      logo: '',
      serving: 100,
      calories: 0,
      macros: {
        fat: 0,
        protein: 0,
        carbs: {
          total: 0,
          sugars: 0,
        },
      },
      salt: 0,
    },
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [searchDropdownContents, setSearchDropdownContents] = useState<
    IProducts[]
  >([]);
  const [allChosenProducts, setAllChosenProducts] = useState<IProducts[]>([]);
  // - Used for remembering selectedProduct when GramInput goes to 0.
  const [currentProduct, setCurrentProduct] = useState<IProducts | {}>({});

  // Custom Hooks
  useFetchEffect(
    'products.json',
    showSearchDropdown(setSearchDropdownContents, searchTerm),
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
        setSearchDropdownContents={setSearchDropdownContents}
        ref={searchBarRef}
      />
      <SearchDropdown
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
        <NutritionTitleBar
          gramInputRef={gramInputRef}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          currentProduct={currentProduct}
          setCurrentProduct={setCurrentProduct}
        />
        <NutritionList
          className={selectedProductClass + '__nutrition-list'}
          selectedProduct={selectedProduct}
        />
        <AddToList
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          allChosenProducts={allChosenProducts}
          setAllChosenProducts={setAllChosenProducts}
          className={selectedProductClass}
        />
      </div>
      <hr className="added-products-list__divider--upper dividers" />
      <AddedProductsList />
      {/* <AddedProductsList /> */}
      {/* <AddedProducts allChosenProducts={allChosenProducts} /> */}
    </div>
  );
}

export default App;
