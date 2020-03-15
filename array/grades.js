function Grades(name) {
    this._name = name
    this.getStudentGrades = function () {
        return `The student ${this._name} has the following grades: ${this._grade}`
    }
    this.setStudentGrades = function (...value) {
        const [...grade] = value
        this._grade = grade
    }
    this.average = function () {
        this.getAverage = null
        this.numberOfGrades = this._grade.length
        this.sum = this._grade.reduce(
            function (acc, val) {
                return (acc + val)
            })
        this.getAverage = this.sum / this.numberOfGrades
        return ` The grade's average of ${this._name} is ${this.getAverage}`
    }
}

const studente1 = new Grades('Edoardo')
studente1.setStudentGrades(5, 4, 7, 8, 6, 5)
console.log(studente1.getStudentGrades())
console.log(studente1.average())
