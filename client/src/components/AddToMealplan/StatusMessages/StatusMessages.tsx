import { FC } from 'react';
import { IProducts } from '../../../Interfaces/Products';
import ErrorMessages from './ErrorMessages/ErrorMessages';
import SuccessMessages from './SuccessMessages/SuccessMessages';

import { StyledSection } from './StatusMessages.styled';

interface StatusMessagesProps {
  successfulAdditions: string[] | never[];
  unsuccessfulAdditions: string[] | never[];
  selectedProduct: IProducts;
}

const StatusMessages: FC<StatusMessagesProps> = ({
  successfulAdditions,
  unsuccessfulAdditions,
  selectedProduct,
}) => {
  return (
    <StyledSection>
      <ErrorMessages
        unsuccessfulAdditions={unsuccessfulAdditions}
        selectedProduct={selectedProduct}
      />
      <SuccessMessages
        successfulAdditions={successfulAdditions}
        selectedProduct={selectedProduct}
      />
    </StyledSection>
  );
};

export default StatusMessages;
