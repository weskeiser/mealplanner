import ProductList from '../ProductList/ProductList';
import { ProductsDisplayed } from '../../Interfaces/Products';

const ProductDisplay = ({ productsDisplayed }: ProductsDisplayed) => {
  // const ProductList = productsDisplayed.map(({ calories, id }) => {
  //   return (
  //     <ListItem
  //       value={calories}
  //       className={null}
  //       key={id}
  //       children={calories}
  //     />
  //   );
  // });

  // return (
  //   <ListItem value={calories} className={null} key={id} children={calories} />
  // );

  return <ul className="product-display">{ProductList(productsDisplayed)}</ul>;
};

export default ProductDisplay;
