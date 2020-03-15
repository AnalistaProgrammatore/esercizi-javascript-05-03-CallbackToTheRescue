let calculator = {
    set values(values) {
        this.a = values[0]
        this.b = values[1]
    },
    add() {
        return this.a + this.b
    },
    sub() {
        return this.a - this.b
    },
    mul() {
        return this.a * this.b
    },
    div() {
        if (this.b === 0) {
            const arr = [this.add(), this.sub(), this.mul()]
            return arr.reduce((acc, val) => [...acc, val], [])
        } else { return this.a / this.b }
    }
}

calculator.values = [10, 0]
console.log(calculator.add())
console.log(calculator.sub())
console.log(calculator.mul())
console.log(calculator.div())
