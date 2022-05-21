const AddedProductsList = () => {
  const openList = () => {
    console.log('hi');
  };

  return (
    <>
      <div className="added-products-list" onClick={openList}>
        <h2 className="added-products-list__title">Mandag (0)</h2>
        <div className="added-products-list__arrow__outter">
          <div className="added-products-list__arrow__inner"></div>
        </div>
      </div>
      <hr className="added-products-list__divider--lower dividers" />
    </>
  );
};

export default AddedProductsList;
