let arr = [6, 9, 4, 1, 1, 1, 1, 1, 1, 1]

let ba = arr.sort((a, b) => b - a)
console.log(ba);
let max2 = arr[0]
console.log(max2)
let check = false
for (let index = 1; index < arr.length; index++) {
    if (max2 != arr[index]) {
        max2 = arr[index]
        console.log(max2)
        check = true
        break;
    }
}
if (check) console.log(max2);
else console.log(-1);   