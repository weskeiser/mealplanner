import { FC, useMemo, useState } from 'react';
import { IProducts } from '../../../../Interfaces/Products';
import { IVitamins } from '../../../../Interfaces/Vitamins';
import { getNutritionProps } from '../../../Mealplan/Mealplans/Day/helpers/getDailyTotalNutrition';

interface TableBodyProps {
  selectedProduct: IProducts | getNutritionProps;
  mode: string;
}

const TableBody: FC<TableBodyProps> = ({ selectedProduct, mode }) => {
  const { properties } = selectedProduct;
  const { calories, macros, salt, fiber } = properties;
  const { fat, protein, carbs } = macros;
  const { total: fatTotal } = fat;
  const {
    total,
    sugar: { total: totalSugar },
  } = carbs;

  const [tableData, setTableData] = useState({
    Kalorier: calories,
    Fett: fatTotal,
    Proteiner: protein,
    Karbohydrater: total,
    '- Hvorav sukkerarter': totalSugar,
    Fiber: fiber,
    Salt: salt,
  });

  const tableDataReduces = (state, action) => {
    switch (action.type) {
    }
  };

  const nutritionData = useMemo(() => {
    if (mode === 'standard' || mode === 'simple') {
      setTableData({
        Kalorier: calories,
        Fett: fatTotal,
        Proteiner: protein,
        Karbohydrater: total,
        '- Hvorav sukkerarter': totalSugar,
        Fiber: fiber,
        Salt: salt,
      });
    }

    if (mode === 'vitamins') {
      fetch('./vitamins.json')
        .then((res) => {
          if (res.ok) return res.json();
          return res.json().then((json) => Promise.reject(json));
        })
        .then((res) => {
          const isSelected = res.filter((productVitamins: IVitamins) => {
            return productVitamins.id === selectedProduct.id;
          });

          const vitamins = isSelected[0].vitamins;

          const sortedVitamins = Object.entries(vitamins).sort(
            (a, b) => b[1] - a[1]
          );

          const sortedAndTranslated = sortedVitamins.reduce((prev, curr) => {
            const sorted = (key) => {
              return Object.assign(prev, { [key]: curr[1] });
            };

            switch (curr[0]) {
              case 'omega3':
                return sorted('Omega3');
              case 'omega6':
                return sorted('Omega 6');
              case 'vitaminA':
                return sorted('Vitamin A');
              case 'retinol':
                return sorted('Retinol');
              case 'betacarotene':
                return sorted('Betakaroten');
              case 'vitaminD':
                return sorted('Vitamin D');
              case 'vitaminE':
                return sorted('Vitamin E');
              case 'thiamine':
                return sorted('Tiamin');
              case 'riboflavin':
                return sorted('Riboflavin');
              case 'niacin':
                return sorted('Niacin');
              case 'vitaminB6':
                return sorted('Vitamin B6');
              case 'folate':
                return sorted('Folat');
              case 'vitaminB12':
                return sorted('Vitamin B12');
              case 'vitaminC':
                return sorted('Vitamin C');
              case 'calcium':
                return sorted('Kalsium');
              case 'iron':
                return sorted('Jern');
              case 'sodium':
                return sorted('Natrium');
              case 'potassium':
                return sorted('Kalium');
              case 'magnesium':
                return sorted('Magnesium');
              case 'zinc':
                return sorted('Sink');
              case 'selenium':
                return sorted('Selenium');
              case 'copper':
                return sorted('Kobber');
              case 'phosphorus':
                return sorted('Fosfor');
              case 'iodine':
                return sorted('Jod');
            }
          }, {});

          setTableData(sortedAndTranslated);
        });
    }
  }, [mode, selectedProduct]);

  return (
    <tbody>
      {Object.keys(tableData).map((key, index) => {
        const value = Object.values(tableData)[index];
        return (
          <tr key={key + value + selectedProduct.id}>
            <td>{key}</td>
            <td>{key === 'Kalorier' ? value.toFixed(0) : value.toFixed(1)}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
