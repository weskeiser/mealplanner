const AddedProduct = ({ productsAndNutritionC, name, properties }) => {
  return (
    <>
      <p className={productsAndNutritionC + '__product__title'}>
        {name},{' '}
        <span className={productsAndNutritionC + '__product__title__brand'}>
          {properties.brand}
        </span>
      </p>
      <p className={productsAndNutritionC + '__product__serving'}>
        {properties.serving}g
      </p>
    </>
  );
};

export default AddedProduct;
