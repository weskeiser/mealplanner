import { FC } from 'react';
import { IProducts } from '../../../../../Interfaces/Products';

interface ProductNameProps {
  searchTerm: string;
  product: IProducts;
}

const ProductName: FC<ProductNameProps> = ({ product, searchTerm }) => {
  const productName = product.name;
  const highlightedPart = productName.slice(0, searchTerm.length);

  const restOfWord = productName.slice(searchTerm.length);

  const highlightedStyle = productName
    .toLowerCase()
    .startsWith(searchTerm.toLowerCase())
    ? 'search-section__search-results__list-item__name__highlighted'
    : '';

  const checkForHighlight = productName
    .toLowerCase()
    .startsWith(searchTerm.toLowerCase())
    ? 'search-section__search-results__list-item__name'
    : 'search-section__search-results__list-item__name search-section__search-results__list-item__name__unhighlighted-product';

  return (
    <p
      aria-label={productName}
      title={productName}
      className={checkForHighlight}
    >
      <span className={highlightedStyle}>{highlightedPart}</span>
      {restOfWord}
    </p>
  );
};

export default ProductName;
