function seqSearchLastItem(arr, data) {
    let toReturn = -1
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === data) {
            toReturn = i
        }
    }
    return toReturn
}

const arr = [1, 2, 3, 4, 9, 5, 4, 3, 2, 9]
const num = 9
var position = seqSearchLastItem(arr, num);

if (position > -1) {
    console.log(num + " is in the array and the last element is at position " + position)
}
else {
    console.log(num + " is not in the array.");
}
