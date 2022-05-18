import ListItem from '../ListItem/index';
import { IProducts } from '../../Interfaces/Products';

interface IListContent {
  className: string;
  productsDisplayed: IProducts;
}

const NutritionList = ({ className, productsDisplayed }: IListContent) => {
  const { properties } = productsDisplayed;
  const { calories, salt, macros } = properties;
  const { fat, protein, carbs } = macros;
  const { total, sugars } = carbs;

  const listValues = [calories, fat, protein, total, sugars, salt];
  const listKeys = [
    'Kalorier',
    'Fett',
    'Proteiner',
    'Karbohydrater',
    '- Hvorav sukkerarter',
    'Salt',
  ];

  return (
    <ul className={className}>
      {listKeys.map((key, index) => (
        <ListItem
          children={
            <>
              <div className={className + '__list-item__key'}>{key}</div>
              <div className={className + '__list-item__value'}>
                {listValues[index]}
              </div>
            </>
          }
          className={className + '__list-item'}
          key={key}
        />
      ))}
    </ul>
  );
};

export default NutritionList;
