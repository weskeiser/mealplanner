import {
  Dispatch,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useState,
} from 'react';

interface ISelectMealplan {
  className: string;
  listNames: string[];
  setListNames: Dispatch<React.SetStateAction<string[]>>;
}

const SelectMealplan: ForwardRefExoticComponent<
  ISelectMealplan & RefAttributes<HTMLSelectElement | undefined>
> = forwardRef<HTMLSelectElement | undefined, ISelectMealplan>(
  ({ className, listNames, setListNames }, ref) => {
    const [inputVisible, setInputVisible] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const listOptions = listNames.map((listName) => {
      return (
        <option
          value={listName}
          className={className + '__add-to-list__list-dropdown__option'}
        >
          {listName}
        </option>
      );
    });

    const addNewList = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();

      const newListInputEl = e.target.parentElement.addNewListName;
      if (newListInputEl) {
        if (newListInputEl.value !== '') {
          setListNames((listNames) => listNames.concat(newListInputEl.value));
          console.log(newListInputEl.value);
          setSuccessMessage('Ny liste lagt til');
        }
      }
      setInputVisible((inputVisible) => !inputVisible);

      if (!newListInputEl) {
        setSuccessMessage('');
      }
    };

    return (
      <>
        <form
          className={className + '__add-to-list__list-dropdown__add-list'}
          id="addNewListForm"
        >
          {inputVisible && (
            <input
              name="addNewListName"
              type="text"
              className={
                className + '__add-to-list__list-dropdown__add-list__input'
              }
              placeholder="Nytt listenavn"
              autoComplete="off"
            />
          )}
          {successMessage && (
            <p
              className={
                className +
                '__add-to-list__list-dropdown__add-list__success-message'
              }
            >
              {successMessage}
            </p>
          )}
          <button
            className={
              className + '__add-to-list__list-dropdown__add-list__button'
            }
            onClick={(e) => addNewList(e)}
            formTarget="addNewListForm"
          >
            &#65291;
          </button>
        </form>
        <select
          ref={ref}
          name="list-dropdown"
          id="list-dropdown"
          className={className + '__add-to-list__list-dropdown'}
        >
          {listOptions}
        </select>
      </>
    );
  }
);

export default SelectMealplan;
