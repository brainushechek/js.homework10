let name = ['name1', 'name2', 'name3']
let surname = ['surname1', 'surname2', 'surname3']
let newArr = []

for (let i = 0; (i < name.length && i < surname.length); i++) {
    newArr.push(name[i].concat(' ',surname[i]))
}