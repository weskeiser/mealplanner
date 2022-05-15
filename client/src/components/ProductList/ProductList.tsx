import ListItem from '../ListItem/index';
import { IProducts } from '../../Interfaces/Products';

interface IListContent {
  className: string;
  productsDisplayed: IProducts;
}

const ProductList = ({ className, productsDisplayed }: IListContent) => {
  const { name, category, properties } = productsDisplayed;
  const { brand, calories, salt, macros } = properties;
  const { fat, protein, carbs } = macros;
  const { total, sugars } = carbs;

  const listValues = [
    name,
    brand,
    category,
    calories,
    fat,
    protein,
    total,
    sugars,
    salt,
  ];
  const listKeys = [
    'Vare',
    'Merke',
    'Kategori',
    'Kalorier',
    'Fett',
    'Proteiner',
    'Karbohydrater',
    'Hvorav sukkerarter',
    'Salt',
  ];

  return (
    <ul className={className}>
      {listKeys.map((key, index) => (
        <ListItem
          children={
            <>
              <p className={className + '__list-item__key'}>{key}</p>
              <p className={className + '__list-item__value'}>
                {listValues[index]}
              </p>
            </>
          }
          className={className + '__list-item'}
          key={key}
        />
      ))}
    </ul>
  );
};

export default ProductList;
