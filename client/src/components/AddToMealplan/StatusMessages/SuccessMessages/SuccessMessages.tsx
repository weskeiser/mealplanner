import { FC } from 'react';
import { IProducts } from '../../../../Interfaces/Products';

interface ISuccessMessages {
  successfulAdditions: string[] | never[];
  className: string;
  selectedProduct: IProducts;
}
const SuccessMessages: FC<ISuccessMessages> = ({
  successfulAdditions,
  className,
  selectedProduct,
}) => {
  return (
    <>
      {successfulAdditions.map((addition) => (
        <p
          className={className + '__add-to-list__success'}
          key={'success' + addition}
        >
          {selectedProduct.name}, {addition[2]}g ble lagt til i {addition[0]},{' '}
          {addition[1]}.
        </p>
      ))}
    </>
  );
};

export default SuccessMessages;
