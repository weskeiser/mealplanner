const IncrementMeals = () => {
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

  return (
    <>
      <button>+</button>
      <button>-</button>
    </>
  );
};

export default IncrementMeals;
