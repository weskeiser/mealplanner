import ListItem from '../ListItem/index';
import { IProducts } from '../../Interfaces/Products';
import { FC } from 'react';
import { ItotalNutritionalValue } from '../Mealplanner/MealplanDay/MealplanMeal/ProductsAndNutrition/ProductsAndNutrition';

interface IListContent {
  className: string;
  selectedProduct: IProducts | ItotalNutritionalValue;
  additionalKeys?: string;
}

const NutritionList: FC<IListContent> = ({
  className,
  selectedProduct,
  additionalKeys,
}) => {
  const { properties } = selectedProduct;
  const { calories, salt, macros } = properties;
  const { fat, protein, carbs } = macros;
  const { total, sugars } = carbs;

  const listValues = [
    +calories.toFixed(),
    +fat.toFixed(1),
    +protein.toFixed(1),
    +total.toFixed(1),
    +sugars.toFixed(1),
    +salt.toFixed(1),
  ];
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
          key={`${className}${key}${selectedProduct.id}${additionalKeys}`}
        />
      ))}
    </ul>
  );
};

export default NutritionList;
