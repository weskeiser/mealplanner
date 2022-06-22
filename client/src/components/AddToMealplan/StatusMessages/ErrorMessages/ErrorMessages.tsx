import { FC } from 'react';
import { IProducts } from '../../../../Interfaces/Products';

import { StyledErrorMessage } from '../StatusMessages.styled';

interface ErrorMessagesProps {
  unsuccessfulAdditions: string[] | never[];
  selectedProduct: IProducts;
}

const ErrorMessages: FC<ErrorMessagesProps> = ({
  unsuccessfulAdditions,
  selectedProduct,
}) => {
  return (
    <>
      {unsuccessfulAdditions.map((unsuccessfulAddition) => (
        <StyledErrorMessage key={'unsuccessful' + unsuccessfulAddition}>
          {selectedProduct.name}, {unsuccessfulAddition[2]}g eksisterer allerede
          i {unsuccessfulAddition[0]}, {unsuccessfulAddition[1]}.
        </StyledErrorMessage>
      ))}
    </>
  );
};

export default ErrorMessages;
