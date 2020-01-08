const names = ['name1', 'name2', 'name3']
const surnames = ['surname1', 'surname2', 'surname3']
const arr = []

names.forEach((name, nameIndex) => {
    surnames.forEach((surname, surnameIndex) => {
       if(nameIndex === surnameIndex) {
            arr.push(name.concat(' ', surname))
       }
    })
})