class Ladder {
    constructor() {
        this.step = 0
    }
    up() {
        this.step++
        return this
    }
    down() {
        this.step--
        return this
    }
    showStep() {
        console.log(this.step)
    }
}
const myLadder = new Ladder()
myLadder.up().up().down().showStep()
