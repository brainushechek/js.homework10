let str = 'Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик'

function checkString(string) {
    for (let el of string) {
        if ((el.charCodeAt() > 1103) || (el.charCodeAt() < 1040)) {
            string = string.replace(el, '')
        } 
    }
    return string
}

checkString(str)