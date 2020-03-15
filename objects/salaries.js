let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const totalSalaries = function (obj) {
    let total = 0
    for (let i = 0; i < Object.keys(obj).length; i++) {
        total = Object.values(obj).reduce((acc, val) => acc + val)
    }
    return total
}

const prova = totalSalaries(salaries)
console.log(prova)
