import ListItem from '../../common/ListItem';

const NutrientInputs = () => {
  const inputNames = [
    'Kalorier',
    'Fett',
    'Proteiner',
    'Karbohydrater',
    '- Hvorav sukkerarter',
    'Salt',
  ];

  return (
    <ul className="custom-product__form__list">
      {inputNames.map((key) => (
        <ListItem
          className="custom-product__form__list__input"
          key={'custom' + key}
        >
          <>
            <label htmlFor={'addCustom' + key}>{key}</label>
            <input
              id={'addCustom' + key}
              type="number"
              name={key.split(' ')[key.split(' ').length - 1]}
              placeholder=""
            />
          </>
        </ListItem>
      ))}
    </ul>
  );
};

export default NutrientInputs;
