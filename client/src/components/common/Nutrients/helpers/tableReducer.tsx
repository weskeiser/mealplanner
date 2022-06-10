import { nutrientsData } from '../Nutrients';

interface tableDataActions {
  type: 'vitamins' | 'simple' | 'standard' | 'update';
  payload: nutrientsData;
}

const tableDataReducer = (
  tableData: nutrientsData,
  action: tableDataActions
) => {
  switch (action.type) {
    case 'vitamins':
      return { ...action.payload, type: 'vitamins', title: 'Vitaminer' };
    case 'simple':
      return { ...action.payload, type: 'simple', title: 'Næringsinnhold' };
    case 'standard':
      return { ...action.payload, type: 'standard', title: 'Næringsinnhold' };
    case 'update':
      return { ...action.payload };
    default:
      throw new Error();
  }
};

export default tableDataReducer;
