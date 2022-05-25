import { FC } from 'react';

interface IProductName {
  productName: string;
  highlighted: boolean;
  searchTerm: string;
}

const ProductName: FC<IProductName> = ({
  productName,
  highlighted,
  searchTerm,
}) => {
  const highlightedPart = productName.slice(0, searchTerm.length);
  const restOfWord = productName.slice(searchTerm.length);

  const highlightedStyle =
    highlighted &&
    productName.toLowerCase().startsWith(searchTerm.toLowerCase())
      ? 'search-results__list-item__name__highlighted'
      : '';

  return (
    <>
      <span className={highlightedStyle}>{highlightedPart}</span>
      {restOfWord}
    </>
  );
};

export default ProductName;
