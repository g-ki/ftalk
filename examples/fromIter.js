const { fromIter, map, filter, pipe, iterate } = require('ftalk');

pipe(
  fromIter([1,2,3,4]),
  map(x => x ** 2),
  filter(x => x % 4 == 0),
  iterate(x => console.log(x))
);
