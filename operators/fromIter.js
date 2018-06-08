const fromIter = iter => to => {
  const iterator =
    typeof Symbol !== 'undefined' && iter[Symbol.iterator]
      ? iter[Symbol.iterator]()
      : iter;
  let res;

  const next = () => {
    if (!(res && res.done)) {
      res = iterator.next();
      if (!res.done) to(res.value);
    }
  };

  return (q) => {
    if (q === 'next') next();
  };
};

module.exports = fromIter;
