import { FC } from 'react';
import ListOptions from './ListOptions';

interface ISelectMealplan {
  className: string;
  listNames: string[];
  name: string;
}

const SelectMealplan: FC<ISelectMealplan> = ({
  className,
  listNames,
  name,
  inputRef,
}) => {
  const listOptions = listNames.map((listName, optionIndex) => {
    return (
      <ListOptions
        key={'listOptions' + listName}
        listName={listName}
        className={className}
        ref={inputRef}
        optionIndex={optionIndex}
        name={name}
      />
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
    <fieldset name={name} className={className + '__add-to-list__options'}>
      {listOptions}
    </fieldset>
  );
};

export default SelectMealplan;
