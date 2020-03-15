const obj = {
    a: 1
}

const isEmpty = function (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            return false
    }
    return true
}

console.log(isEmpty(obj))
