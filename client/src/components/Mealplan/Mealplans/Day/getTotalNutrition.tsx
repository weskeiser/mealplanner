const getTotalNutrition = (products, id) => {
  return products.reduce(
    (prev, curr) => {
      return {
        ...prev,
        properties: {
          ...prev.properties,
          calories: prev.properties.calories + curr.properties.calories,
          macros: {
            fat: prev.properties.macros.fat + curr.properties.macros.fat,
            protein:
              prev.properties.macros.protein + curr.properties.macros.protein,
            carbs: {
              total:
                prev.properties.macros.carbs.total +
                curr.properties.macros.carbs.total,
              sugars:
                prev.properties.macros.carbs.sugars +
                curr.properties.macros.carbs.sugars,
            },
          },
          salt: prev.properties.salt + curr.properties.salt,
        },
      };
    },
    {
      id: id,
      properties: {
        calories: 0,
        macros: {
          fat: 0,
          protein: 0,
          carbs: {
            total: 0,
            sugars: 0,
          },
        },
        salt: 0,
      },
    }
  );
};

export default getTotalNutrition;
