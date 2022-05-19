import { useState } from 'react';
import useFetchEffect from './hooks/useFetchEffect';
import './styles/App.css';

import SearchBar from './components/SearchBar/SearchBar';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';

import SearchDropdown from './components/SearchDropdown/SearchDropdown';
import { IProducts } from './Interfaces/Products';
import AddByGrams from './components/AddByGrams/AddByGrams';

function App() {
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
    <>
      <div className="header"></div>
      <h1 className="page__title">Næringsinnholdkalkulator</h1>
      <div className="page">
        <SearchBar setSearchTerm={setSearchTerm} />
        <SearchDropdown
          searchTerm={searchTerm}
          searchDropdownContents={searchDropdownContents}
          setChosenProduct={setChosenProduct}
        />
        <div className="add-by-grams__container">
          <AddByGrams chosenProduct={chosenProduct} />
          <ProductDisplay chosenProduct={chosenProduct} />
        </div>
      </div>
    </>
  );
}

export default App;
