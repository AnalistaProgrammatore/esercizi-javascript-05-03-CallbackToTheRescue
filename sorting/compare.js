//Per quello che ho potuto vedere anche nel caso di stringhe numeriche casuali l'insertion sort resta l'algoritmo di ordinamento più veloce;
//Tuttavia quando l'algoritmo deve ordinare numeri casuali invece di stringhe di numeri casuali la velocità del tempo di ordinamento è dimezzata.

function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = function (element) {
        this.dataStore[this.pos++] = element;
    }
    this.toString = function () {
        let retstr = "";
        for (let i = 0; i < this.dataStore.length; ++i) {
            retstr += this.dataStore[i] + " ";
            if (i > 0 && i % 10 === 0) {
                retstr += " ";
            }
        }
        return retstr
    }
    this.clear = function () {
        for (let i = 0; i < this.dataStore.length; ++i) {
            this.dataStore[i] = 0;
        }
    }
    this.setData = function () {
        for (let i = 0; i < this.numElements; ++i) {
            this.dataStore[i] = ' ' + Math.floor(Math.random() *
                (this.numElements + 1));
        }
    }
    this.swap = function (arr, index1, index2) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    this.insertionSort = function () {
        let temp, inner;
        for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
            temp = this.dataStore[outer];
            inner = outer;
            while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
                this.dataStore[inner] = this.dataStore[inner - 1];
                --inner;
            }
            this.dataStore[inner] = temp;
        }
    }
    this.selectionSort = function () {
        var min, temp;
        for (let outer = 0; outer <= this.dataStore.length - 2; ++outer) {
            min = outer;
            for (let inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
                if (this.dataStore[inner] < this.dataStore[min]) {
                    min = inner;
                }
            }
            this.swap(this.dataStore, outer, min);
        }
    }
    this.bubbleSort = function () {
        const numElements = this.dataStore.length;
        let temp;
        for (let outer = numElements; outer >= 2; --outer) {
            for (let inner = 0; inner <= outer - 1; ++inner) {
                if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                    this.swap(this.dataStore, inner, inner + 1);
                }
            }
        }
    }
    for (let i = 0; i < numElements; ++i) {
        this.dataStore[i] = '' + i;
    }
}

const numElements = 1000
const unsortedStringNumbers = new CArray(numElements)
console.log(unsortedStringNumbers)
unsortedStringNumbers.setData()
console.log(unsortedStringNumbers)

var start = new Date().getTime();
unsortedStringNumbers.insertionSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log("Elapsed time for the insertion sort on " + numElements + " elements is: " + elapsed + " milliseconds."); start = new Date().getTime();

var start = new Date().getTime();
unsortedStringNumbers.selectionSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log("Elapsed time for the selection sort on " + numElements + " elements is: " + elapsed + " milliseconds."); start = new Date().getTime();

var start = new Date().getTime();
unsortedStringNumbers.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log("Elapsed time for the bubble sort on " + numElements + " elements is: " + elapsed + " milliseconds."); start = new Date().getTime();
