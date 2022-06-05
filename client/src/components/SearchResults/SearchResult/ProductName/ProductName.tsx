import { FC } from 'react';
import { IProducts } from '../../../../Interfaces/Products';

interface ProductNameProps {
  productName: string;
  highlighted: boolean;
  searchTerm: string;
  product: IProducts;
}

const ProductName: FC<ProductNameProps> = ({
  productName,
  highlighted,
  searchTerm,
  product,
}) => {
  const highlightedPart = productName.slice(0, searchTerm.length);

  const restOfWord = productName.slice(searchTerm.length);

  const highlightedStyle =
    highlighted &&
    productName.toLowerCase().startsWith(searchTerm.toLowerCase())
      ? 'search-section__search-results__list-item__name__highlighted'
      : '';

  const checkForHighlight =
    highlighted &&
    productName.toLowerCase().startsWith(searchTerm.toLowerCase())
      ? 'search-section__search-results__list-item__name'
      : 'search-section__search-results__list-item__name search-section__search-results__list-item__name__unhighlighted-product';

  return (
    <p title={product.name} className={checkForHighlight}>
      <span className={highlightedStyle}>{highlightedPart}</span>
      {restOfWord}
    </p>
  );
};

export default ProductName;
