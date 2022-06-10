const tableDataReducer = (tableData, action) => {
  switch (action.type) {
    case 'vitamins':
      return { ...action.payload, case: 'vitamins', title: 'Vitaminer' };
    case 'simple':
      return { ...action.payload, case: 'simple', title: 'Næringsinnhold' };
    case 'standard':
      return { ...action.payload, case: 'standard', title: 'Næringsinnhold' };
    case 'update':
      return { ...action.payload };
    default:
      throw new Error();
  }
};

export default tableDataReducer;
