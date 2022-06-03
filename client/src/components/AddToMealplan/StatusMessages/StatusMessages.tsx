import { FC } from 'react';
import { IProducts } from '../../../Interfaces/Products';
import ErrorMessages from './ErrorMessages/ErrorMessages';
import SuccessMessages from './SuccessMessages/SuccessMessages';

interface IStatusMessages {
  className: string;
  successfulAdditions: string[] | never[];
  unsuccessfulAdditions: string[] | never[];
  selectedProduct: IProducts;
}

const StatusMessages: FC<IStatusMessages> = ({
  className,
  successfulAdditions,
  unsuccessfulAdditions,
  selectedProduct,
}) => {
  return (
    <>
      {unsuccessfulAdditions.length > 0 && (
        <ErrorMessages
          unsuccessfulAdditions={unsuccessfulAdditions}
          className={className}
          selectedProduct={selectedProduct}
        />
      )}
      <SuccessMessages
        successfulAdditions={successfulAdditions}
        className={className}
        selectedProduct={selectedProduct}
      />
    </>
  );
};

export default StatusMessages;
