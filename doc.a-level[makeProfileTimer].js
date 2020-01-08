const timer = function makeProfileTimer (someCode) {
    let time = performance.now()
    someCode
    return time = performance.now() - time
}

function count(a, b) {      //some code whose runtime we want to measure
    return result = a + b  
}

console.log(timer(count(2, 3)))