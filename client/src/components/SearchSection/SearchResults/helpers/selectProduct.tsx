import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { IProducts } from '../../../../Interfaces/Products';

const selectProduct = (
  productId: number,
  servingInputRef: HTMLInputElement | undefined,
  searchBarRef: MutableRefObject<HTMLInputElement | undefined>,
  searchResultsContents: IProducts[],
  setSelectedProduct: Dispatch<SetStateAction<IProducts>>,
  setSelectedProductOriginalServing: Dispatch<SetStateAction<{} | IProducts>>,
  setSearchTerm: Dispatch<SetStateAction<string>>
) => {
  const servingInputEl = servingInputRef.current;
  const searchBarEl = searchBarRef.current;

  searchResultsContents.forEach((product) => {
    if (product.id === productId) {
      setSelectedProduct(product);
    }
  });
  servingInputEl.value = '';
  setSelectedProductOriginalServing({});
  searchBarEl.value = '';
  setSearchTerm('');
};

export default selectProduct;
