import fetchVitamins from './fetchVitamins';

const replaceTable = (e, nutritionData, selectedProduct, dispatchTableData) => {
  const type = e.target.value;

  // TODO: Identify selectedProduct by type to be able to render vitamins

  if (type === 'standard') {
    dispatchTableData({
      type: type,
      payload: { ...nutritionData, id: selectedProduct.id },
    });
  }
  if (type === 'simple') {
    dispatchTableData({
      type: type,
      payload: {
        Kalorier: nutritionData.Kalorier,
        Fett: nutritionData.Fett,
        Proteiner: nutritionData.Proteiner,
        Karbohydrater: nutritionData.Karbohydrater,
        '- Hvorav sukkerarter': nutritionData['- Hvorav sukkerarter'],
        id: selectedProduct.id,
      },
    });
  }
  if (e.target.value === 'vitamins') {
    fetchVitamins(selectedProduct, dispatchTableData);
  }
};

export default replaceTable;
