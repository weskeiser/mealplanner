import ListItem from '../ListItem';
import { IProducts } from '../../Interfaces/Products';

interface ISearchDropdownProps {
  searchTerm: string;
  searchDropdownContents: IProducts[];
  setProductsDisplayed: React.Dispatch<React.SetStateAction<IProducts>>;
}

const SearchDropdown = ({
  searchTerm,
  searchDropdownContents,
  setProductsDisplayed,
}: ISearchDropdownProps) => {
  const handleClick = (key) => {
    // setProductsDisplayed(e.currentTarget)
    searchDropdownContents.map((product) => {
      if (product.id === key) {
        setProductsDisplayed(product);
      }
    });
  };

  const handleVisibility = searchTerm ? 'dropdown' : 'dropdown hidden';

  return (
    <div className={handleVisibility}>
      <ul className="dropdown__contents">
        {searchDropdownContents.map((product) => (
          <ListItem
            children={
              <>
                <img
                  src={product.properties.logo}
                  alt={product.properties.brand}
                  className="dropdown__contents__list-item__logo"
                />
                <div className="dropdown__contents__list-item__name">
                  {product.name}
                </div>
                <div className="dropdown__contents__list-item__brand">
                  {product.properties.brand}
                </div>
                {/* <div className="dropdown__contents__list-item__category">
                  {product.category}
                </div> */}
              </>
            }
            className="dropdown__contents__list-item"
            key={product.id}
            onClick={(e) => handleClick(product.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default SearchDropdown;
