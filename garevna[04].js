let arr = [5, 1, 4, 2, 3] //any array

function sort(array) {
    let newArr = []
    while (array.length) {
    newArr = newArr.concat(array.splice(array.indexOf(array.reduce((prev, cur) => prev < cur ? prev : cur)), 1))
    }
    return newArr
}

sort(arr)