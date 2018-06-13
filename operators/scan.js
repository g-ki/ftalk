const scan = (reducer, seed) => from => to => {
  let acc = seed;
  const listen = x => {
    acc = reducer(acc, x)
    to(acc);
  };

  return from(listen);
};

module.exports = scan;
