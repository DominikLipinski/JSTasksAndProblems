let tripleAdd = (x) => {
  return (y) => {
    return (z) => {
      return x + y + z;
    };
  };
};


tripleAdd(10)(20)(30);
// returns total of all 3 numbers added together 