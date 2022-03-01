let students = [
    {
        id: "T3HXX1",
        firstName: "Ngan",
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
    },
    {
        id: "T3HXX5",
        firstName: "An",
        lastName: "Nguyen Nhat"
    },
    {
        id: "T3HXX5",
        firstName: "Sy",
        lastName: "Nguyen Nhat"
    }
]

function sxTen(a, b) {
    let tena = a.firstName
    let tenb = b.firstName
    for (let index = 0; index < tena.length + tenb.length; index++) {
        if (tena[index] > tenb[index]) return 1;
        if (tena[index] < tenb[index]) return -1;
    }
    return 0
}
students.sort(sxTen)
console.log(students);