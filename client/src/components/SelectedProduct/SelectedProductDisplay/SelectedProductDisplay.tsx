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
    <>
      <Styled.SelectedProductDisplay>
        {/* TODO: Replace or remove image */}
        <img alt="" />
        <h2>{selectedProduct.name}</h2>
        <h3>{selectedProduct.description}</h3>
      </Styled.SelectedProductDisplay>
      <Styled.SourceAttribution
        href="www.matvaretabellen.no"
        title='"Matvaretabellen 2021. Mattilsynet. www.matvaretabellen.no"'
      >
        Kilde: Matvaretabellen.no
      </Styled.SourceAttribution>
    </>
  );
};

export default SelectedProductDisplay;
