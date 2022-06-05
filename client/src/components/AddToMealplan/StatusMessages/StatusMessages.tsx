import { FC } from 'react';
import { IProducts } from '../../../Interfaces/Products';
import ErrorMessages from './ErrorMessages/ErrorMessages';
import SuccessMessages from './SuccessMessages/SuccessMessages';

interface StatusMessagesProps {
  className: string;
  successfulAdditions: string[] | never[];
  unsuccessfulAdditions: string[] | never[];
  selectedProduct: IProducts;
}

const StatusMessages: FC<StatusMessagesProps> = ({
  className,
  successfulAdditions,
  unsuccessfulAdditions,
  selectedProduct,
}) => {
  return (
    <section className={className + '__add-to-list__status'}>
      <ErrorMessages
        unsuccessfulAdditions={unsuccessfulAdditions}
        className={className}
        selectedProduct={selectedProduct}
      />
      <SuccessMessages
        successfulAdditions={successfulAdditions}
        className={className}
        selectedProduct={selectedProduct}
      />
    </section>
  );
};

export default StatusMessages;
