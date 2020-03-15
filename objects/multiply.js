let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

const multiplyNumeric = function (obj, num) {
    const newObj = {}
    newObj.width = obj.width * num
    newObj.height = obj.height * num
    newObj.title = obj.title
    return newObj
}

const newMenu = multiplyNumeric(menu, 2)
console.log('old menu', menu)
console.log('new menu', newMenu)
