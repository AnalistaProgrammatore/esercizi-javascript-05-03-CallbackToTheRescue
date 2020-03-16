// ovviamente l'errore che avevo commesso si ripercuoteva anche qui, questa è la versione corretta
const Calculator = function (values) {
    this.values = values
    console.log('this values contiene', this.values)
    this.add = function () {
        return this.values.reduce((acc, val) => acc + val)
    },
        this.sub = function () {
            return this.values.reduce((acc, val) => acc - val)
        },
        this.mul = function () {
            return this.values.reduce((acc, val) => acc * val)
        },
        this.div = function () {
            const [...a] = this.values
            return (a.includes(0)) ? 'You cannot divide by zero' : this.values.reduce((acc, val) => acc / val)
        }
}

const calculator = new Calculator([10, 5, 0])
console.log(calculator.add())
console.log(calculator.sub())
console.log(calculator.mul())
console.log(calculator.div())
