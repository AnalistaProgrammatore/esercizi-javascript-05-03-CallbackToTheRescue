//Nei confronti tra i due metodi la ricerca sequenziale è sproporzionatamente più veloce.

function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.setData = function () {
        for (let i = 0; i < this.numElements; ++i) {
            this.dataStore[i] = Math.floor(Math.random() * Math.floor(Math.random() * 100))
        }
    }
    this.insertionSort = function () {
        let temp, inner
        for (let outer = 1; outer <= this.dataStore.length - 1; ++outer) {
            temp = this.dataStore[outer]
            inner = outer
            while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
                this.dataStore[inner] = this.dataStore[inner - 1]
                --inner
            }
            this.dataStore[inner] = temp;
        }
    }
    for (let i = 0; i < numElements; ++i) {
        this.dataStore[i] = i
    }
}

function sequentialSearch(arr, data) {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === data) {
            return i
        }
    }
    return -1
}

function binSearch(arr, data) {
    let upperBound = arr.length - 1
    let lowerBound = 0
    while (lowerBound <= upperBound) {
        const mid = Math.floor((upperBound + lowerBound) / 2)
        if (arr[mid] < data) {
            lowerBound = mid + 1
        } else if (arr[mid] > data) {
            upperBound = mid - 1
        } else {
            return mid
        }
    }
    return -1
}

const A = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 100))
const num = Number(prompt("Enter a name to search for: "))
var start = new Date().getTime()
const position = sequentialSearch(A, num)
var stop = new Date().getTime()
var elapsed = stop - start;
if (position > -1) {
    console.log("Elapsed time for find " + num + " in the array at position " + position + " using sequential search was " + elapsed + "millisecond")
}
else {
    console.log(num + " is not in the array.")
}
start = new Date().getTime()


const numElements = 10000
const myNums = new CArray(numElements)
myNums.setData()
const unsortedArray = myNums.dataStore
const num2 = Number(prompt("Enter a name to search for: "))
var start = new Date().getTime()
myNums.insertionSort()
const retVal = binSearch(unsortedArray, num2)
var stop = new Date().getTime()
var elapsed = stop - start
if (retVal >= 0) {
    console.log("Elapsed time for sorting data and find" + num2 + " at position " + retVal + " using insertion sort and binary search is " + elapsed + " milliseconds.")
} else {
    console.log(num2 + " is not in array.")
} 
