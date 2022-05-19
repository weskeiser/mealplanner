import ListItem from '../ListItem';
import { IProducts } from '../../Interfaces/Products';

interface ISearchDropdownProps {
  searchTerm: string;
  searchDropdownContents: IProducts[];
  setChosenProduct: React.Dispatch<React.SetStateAction<IProducts>>;
}

const SearchDropdown = ({
  searchTerm,
  searchDropdownContents,
  setChosenProduct,
}: ISearchDropdownProps) => {
  const handleClick = (key) => {
    // setChosenProduct(e.currentTarget)
    searchDropdownContents.map((product) => {
      if (product.id === key) {
        setChosenProduct(product);
      }
    });
  };

  const handleVisibility = searchTerm ? 'dropdown' : 'dropdown hidden';

  return (
    <ul className={handleVisibility}>
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
              {/* <div className="dropdown__list-item__category">
                  {product.category}
                </div> */}
            </>
          }
          className="dropdown__list-item"
          key={product.id}
          onClick={(e) => handleClick(product.id)}
        />
      ))}
    </ul>
  );
};

export default SearchDropdown;
