class Stack {
  constructor (lenght = 10){
    try {
      if (isNaN(lenght)) {
        throw 'Не удалось преобразовать параметр в число.'
      }
      const lenInt = parseInt(lenght)
      const lenFloat = parseFloat(lenght)
      if (lenInt !== lenFloat) {
        throw 'Конструктор принимает только целые числа в десятичном формате.'
      }
      this.array = new Array(lenInt);
      this.pointer = -1;
    }
    catch (ex) {
      console.error(ex.toString())     
    }
  }

  size() {
    if (!this.array) {
      return console.log('Стэк не был инициализирован.')
    }
    return this.array.length;
    
  }

  push(elem) {
    if (this.array.length - 1 == this.pointer) throw 'Превышена вместимость стэка.'
    this.array[++this.pointer] = elem;
  }

  pop() {
    if (this.isEmpty()) throw 'Стэк пуст'
    return this.array[this.pointer--]
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.array[this.pointer]
  }

  isEmpty() {
    return this.pointer === -1
  }

  toArray() {
    if (this.isEmpty()) return []
    
    return this.array.slice(0, this.pointer + 1)
  }

  static fromIterable(iterable) {

    const ok = typeof iterable === 'object' && typeof iterable[Symbol.iterator] === 'function'
    if (!ok) throw 'Невозможно преобразовать в стэк'
    const array = Array.from(iterable)
    const stack = new Stack(array.length)
    for (const el of array) stack.push(el)
    return stack
  }
}

// let stack = new Stack;

// console.log(stack)

module.exports = { Stack };