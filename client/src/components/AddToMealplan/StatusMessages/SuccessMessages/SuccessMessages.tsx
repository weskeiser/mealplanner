import { FC } from 'react';
import { IProducts } from '../../../../Interfaces/Products';

import { StyledSuccessMessage } from '../StatusMessages.styled';

interface SuccessMessagesProps {
  successfulAdditions: string[] | never[];
  selectedProduct: IProducts;
}
const SuccessMessages: FC<SuccessMessagesProps> = ({
  successfulAdditions,
  selectedProduct,
}) => {
  return (
    <>
      {successfulAdditions.map((addition) => (
        <StyledSuccessMessage key={'success' + addition}>
          {selectedProduct.name}, {addition[2]}g ble lagt til i {addition[0]},{' '}
          {addition[1]}.
        </StyledSuccessMessage>
      ))}
    </>
  );
};

export default SuccessMessages;
