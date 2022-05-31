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
  ({ className, listNames, setListNames, name }, ref) => {
    // const [inputVisible, setInputVisible] = useState(false);
    // const [messageAndColor, setMessageAndColor] = useState(['']);

    const listOptions = listNames.map((listName) => {
      return (
        <option
          value={listName}
          className={className + '__add-to-list__list-dropdown__option'}
          key={listName}
        >
          {listName}
        </option>
      );
    });

    // const addNewList = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //   e.preventDefault();
    //   const newListInputEl = e.target.parentElement.addNewListName;

    //   if (newListInputEl) {
    //     if (newListInputEl.value !== '') {
    //       const alreadyExists = listNames.some((name) => {
    //         return name === newListInputEl.value;
    //       });
    //       if (alreadyExists) {
    //         setInputVisible((inputVisible) => !inputVisible);
    //         setMessageAndColor(['Listen eksisterer', 'red']);
    //         return;
    //       }

    //       setListNames((listNames) => listNames.concat(newListInputEl.value));
    //       setMessageAndColor(['Ny liste lagt til', 'green']);
    //     }
    //   }
    //   setInputVisible(!inputVisible);

    //   if (!newListInputEl) {
    //     setMessageAndColor([]);
    //   }
    // };

    // const handleKeyDown = (e) => {
    //   if (e.key === 'Enter') {
    //     addNewList(e);
    //   }

    //   if (e.key === 'Escape') {
    //     setInputVisible(!inputVisible);
    //   }
    // };

    // const greenIfVisible = inputVisible
    //   ? className + '__add-to-list__list-dropdown__add-list__button green'
    //   : className + '__add-to-list__list-dropdown__add-list__button';

    return (
      <>
        <select
          ref={ref}
          name={name}
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
