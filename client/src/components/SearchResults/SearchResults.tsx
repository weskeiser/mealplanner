import ListItem from '../ListItem';
import { IProducts } from '../../Interfaces/Products';

interface ISearchResultsProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchDropdownContents: IProducts[];
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProducts>>;
  searchBarRef: React.MutableRefObject<undefined>;
  gramInputRef: React.MutableRefObject<undefined>;
  setCurrentProduct: React.Dispatch<React.SetStateAction<IProducts>>;
}

const SearchResults = ({
  searchTerm,
  searchDropdownContents,
  setSelectedProduct,
  setSearchTerm,
  searchBarRef,
  gramInputRef,
  setCurrentProduct,
}: ISearchResultsProps) => {
  const selectProduct = (key) => {
    searchDropdownContents.map((product) => {
      if (product.id === key) {
        setSelectedProduct(product);
      }
    });
    gramInputRef.current.value = '';
    setCurrentProduct({});
    searchBarRef.current.value = '';
    setSearchTerm('');
  };

  const visibleIfSearchTerm = searchTerm ? 'search-results' : 'hidden';

  return (
    <ul className={visibleIfSearchTerm}>
      {searchDropdownContents.map((product) => (
        <ListItem
          children={
            <>
              <img
                src={product.properties.logo}
                alt={product.properties.brand}
                className="search-results__list-item__logo"
              />
              <div className="search-results__list-item__name">
                {product.name}
              </div>
              <div className="search-results__list-item__brand">
                {product.properties.brand}
              </div>
            </>
          }
          className="search-results__list-item"
          key={product.id}
          onClick={(e) => selectProduct(product.id)}
        />
      ))}
    </ul>
  );
};

export default SearchResults;
