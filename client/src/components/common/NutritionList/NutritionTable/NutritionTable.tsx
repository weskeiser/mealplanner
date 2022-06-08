import { useEffect, useState } from 'react';
import TableBody from '../TableBody/TableBody';

const NutritionTable = ({ className, selectedProduct, totalServing, mode }) => {
  const [title, setTitle] = useState('lol');

  useEffect(() => {
    if (mode === 'standard') {
      setTitle('Næringsinnhold');
    }

    if (mode === 'simple') {
      setTitle('Næringsinnhold');
    }

    if (mode === 'vitamins') {
      setTitle('Vitaminer');
    }
  }, [mode]);

  return (
    <table className={className + '__nutrition-list'}>
      <thead>
        <tr>
          <th>{title}</th>
          <th>{totalServing}</th>
        </tr>
      </thead>

      <TableBody mode={mode} selectedProduct={selectedProduct} />
    </table>
  );
};

export default NutritionTable;
