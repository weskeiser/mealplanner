import { FC } from 'react';
import { IProducts } from '../../../../Interfaces/Products';

interface IErrorMessages {
  unsuccessfulAdditions: string[] | never[];
  className: string;
  selectedProduct: IProducts;
}

const ErrorMessages: FC<IErrorMessages> = ({
  unsuccessfulAdditions,
  className,
  selectedProduct,
}) => {
  return (
    <>
      {unsuccessfulAdditions.map((unsuccessfulAddition) => (
        <p
          className={className + '__add-to-list__status__error'}
          key={'unsuccessful' + unsuccessfulAddition}
        >
          {selectedProduct.name}, {unsuccessfulAddition[2]}g eksisterer allerede
          i {unsuccessfulAddition[0]}, {unsuccessfulAddition[1]}.
        </p>
      ))}
    </>
  );
};

export default ErrorMessages;
