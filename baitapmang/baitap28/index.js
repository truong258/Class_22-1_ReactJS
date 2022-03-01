let students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]

function checkHo(s) {
    let arr = s.split(' ')
    if (arr[0] == "Do") {
        return true;
    }
    return false
}
let newStudents = []
for (let index = 0; index < students.length; index++) {
    if (checkHo(students[index].lastName)) {
        newStudents.unshift(students[index])
    }
}
console.log(newStudents);