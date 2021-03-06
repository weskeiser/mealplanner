import { IProducts } from "../../../Interfaces/Products";
import { FC, useEffect, useReducer } from "react";
import NutrientTable from "./NutrientTable/NutrientTable";
import tableDataReducer from "./helpers/tableReducer";
import NutrientRadio from "./NutrientRadio/NutrientRadio";
import replaceTable from "./helpers/replaceTable";
import VitaminsTables from "./VitaminsTables/VitaminsTables";
import { getNutritionProps } from "../../Mealplan/Mealplans/Day/helpers/getDailyTotalNutrition";
import useNutrientsMemo from "./hooks/useNutrientsMemo";
import styled from "styled-components";

interface NutrientsProps {
  selectedProduct: IProducts | getNutritionProps;
  totalServingTitle: string;
}

export interface nutrientsData {
  data: [string, number][];
  meta: {
    type: string;
    title: string;
    id: string | number;
  };
}

const Nutrients: FC<NutrientsProps> = ({
  selectedProduct,
  totalServingTitle,
}) => {
  const nutrientsData = useNutrientsMemo(selectedProduct);

  const [tableData, dispatchTableData] = useReducer(
    tableDataReducer,
    nutrientsData
  );

  useEffect(() => {
    replaceTable(
      tableData.meta.type,
      nutrientsData,
      selectedProduct,
      dispatchTableData
    );
  }, [selectedProduct]);

  return (
    <>
      <TableWrapper>
        {tableData.meta.type === "vitamins" ? (
          <VitaminsTables
            tableData={tableData}
            totalServingTitle={totalServingTitle}
          />
        ) : (
          <NutrientTable
            totalServingTitle={totalServingTitle}
            tableData={tableData}
          />
        )}
      </TableWrapper>

      <NutrientRadio
        nutrientsData={nutrientsData}
        selectedProduct={selectedProduct}
        dispatchTableData={dispatchTableData}
      />
    </>
  );
};

const TableWrapper = styled.div`
  height: 16em;
`;

export default Nutrients;
