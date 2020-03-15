const Letter = function (...word) {
    this.word = word
    this.showLetter = function () {
        return word.reduce((acc, val) => acc + val)
    }
}

const word = new Letter('h', 'e', 'l', 'l', 'o', '!')
console.log(word.showLetter())
