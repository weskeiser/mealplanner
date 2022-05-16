import { useState, useEffect } from 'react';
import './styles/App.css';

import SearchBar from './components/SearchBar/SearchBar';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import products from './database/products.json';

import { IProducts } from './Interfaces/Products';

function App() {
  // States
  const [productsDisplayed, setProductsDisplayed] = useState<IProducts>(
    products[0]
  );
  const [searchTerm, setSearchTerm] = useState('myk');
  const [searchDropdown, setSearchDropdown] = useState({});

  const getData = () => {
    fetch('products.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((returnedJSON) => {
        returnedJSON.map((entry) => {
          if (
            entry.name.includes(searchTerm) ||
            entry.category.includes(searchTerm)
          ) {
            setSearchDropdown({
              name: entry.name,
              category: entry.category,
              brand: entry.properties.brand,
            });
          }
        });
      });
  };

  useEffect(() => {
    getData();
  }, [searchTerm]);

  return (
    <>
      <h1>Hello World</h1>
      <br />
      <br />
      <SearchBar setProductsDisplayed={setProductsDisplayed} />
      <br />
      <br />
      {console.log(searchDropdown)}
      <br />
      <ProductDisplay productsDisplayed={productsDisplayed} />
    </>
  );
}

export default App;
