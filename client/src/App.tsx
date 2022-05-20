import { useRef, useState } from 'react';
import useFetchEffect from './hooks/useFetchEffect';
import './styles/App.css';

import SearchBar from './components/SearchBar/SearchBar';

import SearchDropdown from './components/SearchDropdown/SearchDropdown';
import { IProducts } from './Interfaces/Products';
import AddByGrams from './components/AddByGrams/AddByGrams';
import AddedProducts from './components/AddedProducts/AddedProducts';
import NutritionList from './components/NutritionList/NutritionList';

function App() {
  // Refs
  const searchBarRef = useRef();

  // States
  const [chosenProduct, setChosenProduct] = useState<IProducts>({
    id: 0,
    name: 'None',
    category: 'None',
    properties: {
      brand: 'None',
      logo: '',
      calories: 0,
      salt: 0,
      macros: {
        fat: 0,
        protein: 0,
        carbs: {
          total: 0,
          sugars: 0,
        },
      },
    },
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [searchDropdownContents, setSearchDropdownContents] = useState<
    IProducts[]
  >([]);
  const [allChosenProducts, setAllChosenProducts] = useState<IProducts[]>([]);

  // Custom hooks
  const showSearchDropdown = (returnedJSON: IProducts[]) => {
    setSearchDropdownContents([]);
    returnedJSON.forEach((product) => {
      if (
        (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
        searchTerm
      ) {
        setSearchDropdownContents((currentState) => [...currentState, product]);
      }
    });
  };

  useFetchEffect('products.json', showSearchDropdown, [searchTerm], 800);

  return (
    <div className="page">
      <div className="header"></div>
      <h1 className="page-title">Næringsinnholdkalkulator</h1>
      <div className="search-bar__container">
        <SearchBar setSearchTerm={setSearchTerm} ref={searchBarRef} />
      </div>
      <hr className="page-dividers" />
      <SearchDropdown
        searchTerm={searchTerm}
        searchDropdownContents={searchDropdownContents}
        setChosenProduct={setChosenProduct}
        setSearchTerm={setSearchTerm}
        searchBarRef={searchBarRef}
      />
      <div className="chosen-product">
        <div className="chosen-product__title">
          <img src={chosenProduct.properties.logo} alt="" />
          <h2>{chosenProduct.name},</h2>
          <h3>{chosenProduct.properties.brand}</h3>
        </div>
        <div className="chosen-product__nutrition-list__heading">
          <h3>Næringsinnhold</h3>
          <h3>Pr. 100g</h3>
        </div>
        <NutritionList
          className="chosen-product__nutrition-list"
          chosenProduct={chosenProduct}
        />
        <AddByGrams
          chosenProduct={chosenProduct}
          allChosenProducts={allChosenProducts}
          setAllChosenProducts={setAllChosenProducts}
        />
      </div>
      <AddedProducts allChosenProducts={allChosenProducts} />
    </div>
  );
}

export default App;
