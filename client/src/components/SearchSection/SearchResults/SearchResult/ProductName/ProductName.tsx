import { FC } from 'react';
import { IProducts } from '../../../../../Interfaces/Products';
import * as Styled from './ProductName.styled';

interface ProductNameProps {
  searchTerm: string;
  product: IProducts;
}

const ProductName: FC<ProductNameProps> = ({ product, searchTerm }) => {
  const productName = product.name;
  const highlightedCharacters = productName.slice(0, searchTerm.length);

  const restOfWord = productName.slice(searchTerm.length);

  const isHighlighted = productName
    .toLowerCase()
    .startsWith(searchTerm.toLowerCase());

  return (
    <Styled.FullName
      aria-label={productName}
      title={productName}
      isHighlighted={isHighlighted}
    >
      <Styled.HighlightedCharacters isHighlighted={isHighlighted}>
        {highlightedCharacters}
      </Styled.HighlightedCharacters>
      {restOfWord}
    </Styled.FullName>
  );
};

export default ProductName;
