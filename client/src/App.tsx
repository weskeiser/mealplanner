import { useRef, useState } from 'react';
import useFetchEffect from './hooks/useFetchEffect';
import './styles/App.css';

import SearchBar from './components/SearchBar/SearchBar';

import SearchDropdown from './components/SearchDropdown/SearchDropdown';
import { IProducts } from './Interfaces/Products';
import AddByGrams from './components/AddByGrams/AddByGrams';
import AddedProducts from './components/AddedProducts/AddedProducts';
import NutritionList from './components/NutritionList/NutritionList';

import showSearchDropdown from './components/utils/showSearchDropdown';
import SelectedProductTitle from './components/SelectedProductTitle/SelectedProductTitle';

function App() {
  // Refs
  const searchBarRef = useRef();

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

  // Custom Hooks
  useFetchEffect(
    'products.json',
    showSearchDropdown(setSearchDropdownContents, searchTerm),
    [searchTerm],
    800
  );

  // Classnames
  const selectedProductClass = 'selected-product';

  return (
    <div className="page">
      <div className="header"></div>
      <h1 className="page-title">Næringsinnholdkalkulator</h1>
      <SearchBar setSearchTerm={setSearchTerm} ref={searchBarRef} />
      <hr className="page-dividers" />
      <SearchDropdown
        searchTerm={searchTerm}
        searchDropdownContents={searchDropdownContents}
        setSelectedProduct={setSelectedProduct}
        setSearchTerm={setSearchTerm}
        searchBarRef={searchBarRef}
      />
      <div className={selectedProductClass}>
        <SelectedProductTitle selectedProduct={selectedProduct} />
        <NutritionList
          // className="selected-product__nutrition-list"
          className={selectedProductClass + '__nutrition-list'}
          selectedProduct={selectedProduct}
        />
        <AddByGrams
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          allChosenProducts={allChosenProducts}
          setAllChosenProducts={setAllChosenProducts}
          className={selectedProductClass}
        />
      </div>
      <AddedProducts allChosenProducts={allChosenProducts} />
    </div>
  );
}

export default App;
