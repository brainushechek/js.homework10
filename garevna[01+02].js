let group = [
    {
        name: "Name1",
        lastName: "lastName",
        age: 20,
        notebooke: false

    },
    {
        name: "Name2",
        lastName: "lastName2",
        age: 21,
        notebooke: true

    },
    {
        name: "Name3",
        lastName: "lastName3",
        age: 22,
        notebooke: false

    }
]

function getStudentsList(arrayOfStudents) {
    group.forEach((elem) => {
        let arr = Object.entries(elem)
        let newArr = []
        for (let i of arr) {
            newArr = newArr.concat(i.join(': '))
        }
        console.log(newArr.join('; '))
    })    
}

function addNewStudent(name, lastName, age, notebooke) {
    group.push({name: name, lastName: lastName, age: age, notebooke: notebooke})
}


