import { FC } from 'react';
import { IProducts } from '../../../../Interfaces/Products';
import ProductName from './ProductName/ProductName';

interface SearchResultProps {
  product: IProducts;
  searchTerm: string;
}

const SearchResult: FC<SearchResultProps> = ({ product, searchTerm }) => {
  return (
    <>
      <ProductName searchTerm={searchTerm} product={product} />
      <p
        className="search-section__search-results__list-item__brand"
        aria-label="product description"
        title={product.description}
      >
        {product.description}
      </p>
    </>
  );
};

export default SearchResult;
