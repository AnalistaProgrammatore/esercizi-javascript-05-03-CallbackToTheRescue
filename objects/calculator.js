//Avevo interpretato male lo svolgimento dell'esercizio, pensando che la divisione per 0 doveva ritornare  tramite reduce tutti gli altri
//valori precedenti, mea culpa. Ho ripostato la versione corretta.

let calculator = {
    values: [],
    add: function () {
        return this.values.reduce((acc, val) => acc + val)
    },
    sub: function () {
        return this.values.reduce((acc, val) => acc - val)
    },
    mul: function () {
        return this.values.reduce((acc, val) => acc * val)
    },
    div: function () {
        const [...a] = this.values
        return (a.includes(0)) ? 'You cannot divide by zero' : this.values.reduce((acc, val) => acc / val)
    }
}

calculator.values = [10, 5, 0]
console.log(calculator.add())
console.log(calculator.sub())
console.log(calculator.mul())
console.log(calculator.div())
