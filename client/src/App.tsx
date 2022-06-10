import { useRef, useState } from 'react';
import './styles/App.css';

import { IProducts } from './Interfaces/Products';
import AddCustomProduct from './components/SelectCustomProduct/SelectCustomProduct';
import SearchSection from './components/SearchSection/SearchSection';
import SelectedProduct from './components/SelectedProduct/SelectedProduct';
import MealplanSection from './components/MealplanSection/MealplanSection';

function App() {
  const servingInputRef = useRef<HTMLInputElement | undefined>();

  const [selectedProduct, setSelectedProduct] = useState<IProducts>({
    id: 3.47,
    name: 'Leverpostei',
    description: 'uspesifisert',
    properties: {
      serving: 100,
      calories: 233,
      macros: {
        fat: {
          total: 18.7,
          types: {
            saturated: 3.8,
            trans: 0,
            monounsaturated: 9.1,
            polyunsaturated: 5.2,
          },
          cholesterol: 94,
        },
        protein: 9.9,
        carbs: { total: 5.9, sugar: { total: 5.9, added: 0 } },
      },
      fiber: 1,
      salt: 1.6,
      source: 'matvaretabellen',
    },
  });
  const [selectedProductOriginalServing, setSelectedProductOriginalServing] =
    useState<IProducts | {}>({});

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
      <MealplanSection
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        servingInputRef={servingInputRef}
        selectedProductOriginalServing={selectedProductOriginalServing}
        setSelectedProductOriginalServing={setSelectedProductOriginalServing}
      />
    </main>
  );
}

export default App;
