import { FC, memo } from 'react';

import { IProducts } from '../../Interfaces/Products';
import Nutrients from '../common/Nutrients/Nutrients';
import SelectedProductDisplay from './SelectedProductDisplay/SelectedProductDisplay';
import SourceAttribution from './SourceAttribution/SourceAttribution';

import * as Styled from './SelectedProduct.styled';

interface SelectedProductProps {
  selectedProduct: IProducts;
}

const SelectedProduct: FC<SelectedProductProps> = memo(
  ({ selectedProduct }) => {
    return (
      <Styled.SelectedProduct>
        <SelectedProductDisplay selectedProduct={selectedProduct} />
        {/* TODO: 
        - Merge adjacent JSX Elements
         */}
        <SourceAttribution />

        <Nutrients
          selectedProduct={selectedProduct}
          totalServingTitle={'Pr. ' + selectedProduct.properties.serving + 'g'}
        />
      </Styled.SelectedProduct>
    );
  }
);
export default SelectedProduct;
