# ftalk - Small Reactive Library

## Usage

```js
const { interval, map, filter, pipe, iterate, take } = require('ftalk');

pipe(
  interval(1000),
  map(x => x + 1),
  filter(x => x % 2 == 0),
  take(5),
  iterate(x => console.log(x))
);

// 2
// 4
// 6
// 8
// 10
```


```js
const { fromIter, map, filter, pipe, iterate } = require('ftalk');

pipe(
  fromIter([1,2,3,4]),
  map(x => x ** 2),
  filter(x => x % 4 == 0),
  iterate(x => console.log(x))
);

// 4
// 16
```

