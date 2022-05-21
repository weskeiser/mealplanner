import ListItem from '../ListItem';
import { IProducts } from '../../Interfaces/Products';

interface ISearchDropdownProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchDropdownContents: IProducts[];
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProducts>>;
  searchBarRef: React.MutableRefObject<undefined>;
}

const SearchDropdown = ({
  searchTerm,
  searchDropdownContents,
  setSelectedProduct,
  setSearchTerm,
  searchBarRef,
}: ISearchDropdownProps) => {
  const selectProduct = (key) => {
    searchDropdownContents.map((product) => {
      if (product.id === key) {
        setSelectedProduct(product);
      }
    });
    searchBarRef.current.value = '';
    setSearchTerm('');
  };

  const visibleIfSearchTerm = searchTerm ? 'dropdown' : 'dropdown hidden';

  return (
    <ul className={visibleIfSearchTerm}>
      {searchDropdownContents.map((product) => (
        <ListItem
          children={
            <>
              <img
                src={product.properties.logo}
                alt={product.properties.brand}
                className="dropdown__list-item__logo"
              />
              <div className="dropdown__list-item__name">{product.name}</div>
              <div className="dropdown__list-item__brand">
                {product.properties.brand}
              </div>
            </>
          }
          className="dropdown__list-item"
          key={product.id}
          onClick={(e) => selectProduct(product.id)}
        />
      ))}
    </ul>
  );
};

export default SearchDropdown;
