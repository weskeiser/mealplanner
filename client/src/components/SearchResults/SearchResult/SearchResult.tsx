import { FC } from 'react';
import { IProducts } from '../../../Interfaces/Products';
import ProductName from '../ProductName';

interface ISearchResult {
  product: IProducts;
  highlighted: boolean;
  searchTerm: string;
}

const SearchResult: FC<ISearchResult> = ({
  product,
  highlighted,
  searchTerm,
}) => {
  return (
    <>
      <img
        src={product.properties.logo}
        alt={product.name}
        title={product.name}
        className="search-section__search-results__list-item__logo"
      />
      <ProductName
        productName={product.name}
        highlighted={highlighted}
        searchTerm={searchTerm}
        product={product}
      />
      <p
        title={product.properties.brand}
        className="search-section__search-results__list-item__brand"
      >
        {product.properties.brand}
      </p>
    </>
  );
};

export default SearchResult;
