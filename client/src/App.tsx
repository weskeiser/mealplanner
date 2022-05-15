import { useEffect, useState } from 'react';
import './styles/App.css';

import SearchBar from './components/SearchBar/SearchBar';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import products from './database/products.json';

import { IProducts } from './Interfaces/Products';

function App() {
  const [productsDisplayed, setProductsDisplayed] = useState<IProducts>(
    // products[0]
    products[0]
  );

  console.log(products[0]);

  return (
    <>
      <h1>Hello World</h1>
      <ProductDisplay productsDisplayed={productsDisplayed} />
      <SearchBar setProductsDisplayed={setProductsDisplayed} />
    </>
  );
}

export default App;
