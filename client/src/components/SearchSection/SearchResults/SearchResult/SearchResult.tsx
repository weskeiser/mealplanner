import { FC } from 'react';
import { IProducts } from '../../../../Interfaces/Products';
import ProductName from './ProductName/ProductName';
import * as Styled from './ProductDescription.styled';

interface SearchResultProps {
  product: IProducts;
  searchTerm: string;
}

const SearchResult: FC<SearchResultProps> = ({ product, searchTerm }) => {
  return (
    <>
      <ProductName searchTerm={searchTerm} product={product} />
      <Styled.ProductDescription
        aria-label="product description"
        title={product.description}
      >
        {product.description}
      </Styled.ProductDescription>
    </>
  );
};

export default SearchResult;
