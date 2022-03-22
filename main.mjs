import { Stack } from './stack.js';

let stack = new Stack(3)

console.log('Вместимость стэка ', stack.size())

stack.push(111)
stack.push(222)
stack.push(333)

console.log('Pop ', stack.pop())
console.log('Pop ', stack.pop())


console.log('Peek ', stack.peek())

stack = Stack.fromIterable([1,2,3])

console.log(stack.toArray())
