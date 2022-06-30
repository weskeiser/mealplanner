import { FC, memo } from "react";

import { IProducts } from "../../Interfaces/Products";
import Nutrients from "../common/Nutrients/Nutrients";
import SelectedProductDisplay from "./SelectedProductDisplay/SelectedProductDisplay";

import * as Styled from "./Section.styled";

interface SelectedProductProps {
  selectedProduct: IProducts;
}

const SelectedProduct: FC<SelectedProductProps> = memo(
  ({ selectedProduct }) => {
    return (
      <Styled.Section>
        <SelectedProductDisplay selectedProduct={selectedProduct} />

        <Nutrients
          selectedProduct={selectedProduct}
          totalServingTitle={"Pr. " + selectedProduct.properties.serving + "g"}
        />
        <hr />
      </Styled.Section>
    );
  }
);
export default SelectedProduct;
