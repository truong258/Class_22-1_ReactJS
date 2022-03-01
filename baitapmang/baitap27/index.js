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
function chuanHoa(str) {
    str = str.trim().toLowerCase()
    let arr = str.split(' ');
    let kq = ""
    for (let index = 0; index < arr.length; index++) {
        kq += arr[index].slice(0, 1).toUpperCase() + arr[index].substring(1) + ' '
    }
    return kq.trim();
}

for (let index = 0; index < students.length; index++) {
    students[index].firstName = chuanHoa(students[index].firstName)
    students[index].lastName = chuanHoa(students[index].lastName)
}
// console.log(students);
let newStudents = []
for (let index = 0; index < students.length; index++) {
    let check = false
    if (students[index].firstName.length >= 3) {
        for (let i = 0; i < students[index].firstName.length; i++) {
            if (students[index].firstName[i] == 'a' || students[index].firstName[i] == 'A') {
                check = true
                break
            }
        }
    }
    if (check) {
        newStudents.unshift(students[index])
    }
}
console.log(newStudents);