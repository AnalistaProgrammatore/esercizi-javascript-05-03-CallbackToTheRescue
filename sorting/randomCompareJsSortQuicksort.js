//Il metodo sort() di Javascript si attesta mediamente almeno 10 volte più veloce della funzione quickSort();
//tuttavia il metodo sort ordina i dati in maniera lessicofragica, quindi se non gli viene passata una funzione di comparazione 
//come argomento ordinerà male i dati esempio [12, 21, 21, 22, 23, 4]

function qSort(list) {
    if (list.length == 0) {
        return []
    }
    const lesser = []
    const greater = []
    const pivot = list[0]

    for (let i = 1; i < list.length; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i])
        } else {
            greater.push(list[i])
        }
    }
    return qSort(lesser).concat(pivot, qSort(greater))
}

const A = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 100))

var start = new Date().getTime()
qSort(A)
var stop = new Date().getTime()
var elapsed = stop - start
console.log("Elapsed time for the quicksort sort on " + A.length + " elements is: " + elapsed + " milliseconds."); start = new Date().getTime()

var start = new Date().getTime()
A.sort()
var stop = new Date().getTime()
var elapsed = stop - start
console.log("Elapsed time for the Javascript built-in sort function on " + A.length + " elements is: " + elapsed + " milliseconds."); start = new Date().getTime()
