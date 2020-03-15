const Calculator = function (value = []) {
    this.x = value[0]
    this.y = value[1]
    this.sum = function () { return this.x + this.y }
    this.sub = function () { return this.x - this.y }
    this.mul = function () { return this.x * this.y }
    this.div = function () { return this.x / this.y }
}

const calculator = new Calculator([10, 5])
console.log(calculator.sum())
console.log(calculator.sub())
console.log(calculator.mul())
console.log(calculator.div())
