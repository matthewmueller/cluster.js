const cluster = require('./index')

const tasks = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l'
]

cluster(tasks, function (task) {
  console.log('calc', task)
  let o = {
    task: task,
    fib: fibonacci(40)
  }
  console.log('done', task)
  return o
})
  .then(console.log)
  .catch(console.error)

function fibonacci (n) {
  if (n < 2) {
    return 1
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1)
  }
}
