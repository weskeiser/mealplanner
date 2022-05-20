import { IProducts } from '../../Interfaces/Products';

interface IAddCustomProduct {
  allChosenProducts: IProducts[];
  setAllChosenProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
}

const AddCustomProduct = ({
  allChosenProducts,
  setAllChosenProducts,
}: IAddCustomProduct) => {
  return (
    <div className="custom-product">
      <button className="custom-product__initializer">
        Legg til egendefinert
      </button>
      <form className="custom-product__form hidden" action="">
        <input type="text" placeholder="Navn" />
        <input type="text" placeholder="Antall gram" />
        <input type="text" placeholder="Kalorier" />
        <input type="text" placeholder="Fett" />
        <input type="text" placeholder="Proteiner" />
        <input type="text" placeholder="Karbohydrater" />
        <input type="text" placeholder="- Hvorav sukkerarter" />
        <input type="text" placeholder="Salt" />
      </form>
    </div>
  );
};

export default AddCustomProduct;
