const merge = (...from) => to => {
  const ask = from.map(x => x(to));
  return (q) => {
    ask.map(x => x(q))
  }
};

module.exports = merge;
