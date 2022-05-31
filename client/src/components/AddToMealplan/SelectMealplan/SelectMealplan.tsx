import {
  Dispatch,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';

interface ISelectMealplan {
  className: string;
  listNames: string[];
  setListNames: Dispatch<React.SetStateAction<string[]>>;
  name: string;
}

const SelectMealplan: ForwardRefExoticComponent<
  ISelectMealplan & RefAttributes<HTMLSelectElement | undefined>
> = forwardRef<HTMLSelectElement | undefined, ISelectMealplan>(
  ({ className, listNames, setListNames, name, setCheckedMeals }, ref) => {
    // const [inputVisible, setInputVisible] = useState(false);
    // const [messageAndColor, setMessageAndColor] = useState(['']);

    const temp = () => {
      // console.log('hi');
    };

    const listOptions = listNames.map((listName) => {
      return (
        <div
          ref={ref}
          // id="list-dropdown"
          className={className + '__add-to-list__options__option'}
          key={'select' + listName}
          onInput={(e) => temp()}
        >
          <input
            name="checkBoxInput"
            value={listName}
            id={'select' + listName}
            type="checkbox"
          />
          <label htmlFor={'select' + listName}>{listName}</label>
        </div>
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
  }
);

export default SelectMealplan;
