let a = [1, 44, 32, 41, 67, 7];
let k = 5
let min = 100000;
for (let i = 0; i < a.length; i++) {
    let x = Math.abs(a[i] - k)
    if (x < min) min = x
}

let sogantrongmang = a.filter((item, index, array) => {
    return (min == Math.abs(item - k))
})
console.log(sogantrongmang);