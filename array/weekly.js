const MonthlyTemps = function () {
    this.monthsStore = []
    this.addWeek = function (temp) {
        this.monthsStore.push(temp)
    }
    this.calcWeek = function (weekNum) {
        const dayWeek = this.monthsStore[weekNum - 1]
        const temps = dayWeek.reduce((acc, val) => acc + val) / dayWeek.length
        return temps
    }
    this.calcAllWeeks = function () {
        const averageWeeks = this.monthsStore.map(item =>
            item.reduce((acc, val) => acc + val) / item.length)
        return averageWeeks
    }
    this.calcMonthly = function () {
        this.sumWeeks = this.calcWeek(1) + this.calcWeek(2) + this.calcWeek(3) + this.calcWeek(4)
        this.averageMonth = this.sumWeeks / 4
        return `The average grade of this month was ${this.averageMonth}`
    }
}

const gennaio = new MonthlyTemps()
gennaio.addWeek([15, 17, 18, 15, 18, 15, 18])
gennaio.addWeek([17, 19, 19, 17, 20, 19, 16])
gennaio.addWeek([20, 18, 20, 18, 19, 16, 18])
gennaio.addWeek([20, 19, 21, 20, 19, 17, 18])

console.log(gennaio.calcWeek(1))
console.log(gennaio.calcAllWeeks())
console.log(gennaio.calcMonthly())
