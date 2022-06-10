import { nutrientsData } from '../Nutrients';

interface tableDataActions {
  type: 'vitamins' | 'simple' | 'standard' | 'update';
  payload: nutrientsData;
}

const tableDataReducer = (
  tableData: nutrientsData,
  action: tableDataActions
) => {
  const meta = action.payload.meta;

  switch (action.type) {
    case 'vitamins':
      return {
        ...action.payload,
        meta: {
          ...meta,
          type: 'vitamins',
          title: 'Vitaminer',
        },
      };
    case 'simple':
      return {
        ...action.payload,
        meta: {
          ...meta,
          type: 'simple',
          title: 'Næringsinnhold',
        },
      };
    case 'standard':
      return {
        ...action.payload,
        meta: {
          ...meta,
          type: 'standard',
          title: 'Næringsinnhold',
        },
      };
    case 'update':
      return { ...action.payload };
    default:
      throw new Error();
  }
};

export default tableDataReducer;
