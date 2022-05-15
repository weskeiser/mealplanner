import { IProducts } from '../../Interfaces/Products';
import { HTMLAttributes } from 'react';

interface IProps {
  productsDisplayed: IProducts;
}

interface ListItem {
  children: any;
  className: string;
}

const ProductDisplay = ({ productsDisplayed }: IProps) => {
  // useEffect(() => {
  // console.log(productsDisplayed);
  // });

  const ListItem = ({ className, children }: ListItem) => {
    return (
      <li className={className}>
        <div>{children}</div>
      </li>
    );
  };

  const renderProduct = (id) => {
    for (let product in productsDisplayed) {
      if (productsDisplayed.id === id) {
        return (
          <ListItem
            value={productsDisplayed.calories}
            className={''}
            key={productsDisplayed.id}
            children={productsDisplayed.calories}
          />
        );
      }
    }
  };
  // const renderProduct = productsDisplayed.map(({ calories, id }) => {
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

  return <ul className="product-display">{renderProduct(1)}</ul>;
};

export default ProductDisplay;
