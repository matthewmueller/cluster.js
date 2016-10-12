
# cluster.js

  Little helper for clustering functions across your cpu cores.

## Install

```
yarn add cluster.js
```

## Example

```js
const cluster = require('cluster.js')

const tasks = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l' ]

cluster(tasks, function (task) {
  console.log('calculating', task)
  const fib = fibonacci(40)
  console.log('calculated', task)
  return { task: task, n: fib }
})
  .then(console.log)
  .catch(console.error)

function fibonacci (n) {
  if (n < 2) return 1
  return fibonacci(n - 2) + fibonacci(n - 1)
}
```

## License

MIT
