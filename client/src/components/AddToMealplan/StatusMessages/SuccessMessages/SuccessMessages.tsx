import { FC } from 'react';
import { IProducts } from '../../../../Interfaces/Products';

interface SuccessMessagesProps {
  successfulAdditions: string[] | never[];
  className: string;
  selectedProduct: IProducts;
}
const SuccessMessages: FC<SuccessMessagesProps> = ({
  successfulAdditions,
  className,
  selectedProduct,
}) => {
  return (
    <>
      {successfulAdditions.map((addition) => (
        <p
          className={className + '__add-to-list__status__success'}
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
