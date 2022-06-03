import { FC } from 'react';
import { IProperties } from '../../../../../../../../../Interfaces/Products';

interface AddedProductProps {
  prodAndNutrClass: string;
  name: string;
  properties: IProperties;
}

const AddedProduct: FC<AddedProductProps> = ({
  prodAndNutrClass,
  name,
  properties,
}) => {
  return (
    <>
      <p className={prodAndNutrClass + '__product__title'}>
        {name},{' '}
        <span className={prodAndNutrClass + '__product__title__brand'}>
          {properties.brand}
        </span>
      </p>
      <p className={prodAndNutrClass + '__product__serving'}>
        {properties.serving}g
      </p>
    </>
  );
};

export default AddedProduct;
