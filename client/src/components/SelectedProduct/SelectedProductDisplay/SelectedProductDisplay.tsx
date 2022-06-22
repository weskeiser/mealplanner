import { FC } from 'react';
import { IProducts } from '../../../Interfaces/Products';
import * as Styled from './SelectedProductDisplay.styled';

interface SelectedProductDisplayProps {
  selectedProduct: IProducts;
}

const SelectedProductDisplay: FC<SelectedProductDisplayProps> = ({
  selectedProduct,
}) => {
  return (
    <Styled.SelectedProductDisplay>
      {/* TODO: Replace image */}
      <img alt="" />
      <h2>{selectedProduct.name}</h2>
      <h3>{selectedProduct.description}</h3>
    </Styled.SelectedProductDisplay>
  );
};

export default SelectedProductDisplay;
