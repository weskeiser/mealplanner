import { useState } from 'react';
import { IProducts } from '../../Interfaces/Products';

interface IAddCustomProduct {
  allChosenProducts: IProducts[];
  setAllChosenProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
}

const AddCustomProduct = ({
  allChosenProducts,
  setAllChosenProducts,
}: IAddCustomProduct) => {
  const [formHidden, setFormHidden] = useState(true);

  const toggleFormHidden = () => {
    setFormHidden(!formHidden);
  };

  return (
    <div className="custom-product">
      <button
        className="custom-product__initializer"
        onClick={toggleFormHidden}
      >
        Legg til egendefinert
      </button>
      <form
        className={formHidden ? 'hidden' : 'custom-product__form'}
        action=""
      >
        <input type="text" placeholder="Navn" />
        <input type="text" placeholder="Kalorier" />
        <input type="text" placeholder="Fett" />
        <input type="text" placeholder="Proteiner" />
        <input type="text" placeholder="Karbohydrater" />
        <input type="text" placeholder="- Hvorav sukkerarter" />
        <input type="text" placeholder="Salt" />
        <input type="text" placeholder="Antall gram" />
        <button>Legg til</button>
      </form>
    </div>
  );
};

export default AddCustomProduct;
