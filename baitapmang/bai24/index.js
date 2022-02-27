let array = [1, 2, 3, 2, 3, 4, 6, 7];
// let songuyento = (n) => {
//     if (n == 1) {
//         console.log("n không phải là số nguyên tố");
//     } else {
//         for (let i = 2; i <= Math.sqrt(n); i++) {
//             if (n % i == 0) {
//                 return false;
//             }
//         }
//         return true
//     }
// }
// if (songuyento) {
//     console.log(` là số nguyên tố`);
// } else {
//     console.log(` không phải là số nguyên tố`);
// }
// songuyento(55);
// let filterarray = array.filter(function (value) {
//     if (value == songuyento) {
//         return true;
//     }
// })
// console.log(filterarray);
let n = 16;
songuyento = function (n) {
    if (n == 1) {
        console.log("n không phải là số nguyên tố");
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}
if (songuyento(n)) {
    console.log(`${n} là số nguyên tố`);
}
else {
    console.log(`${n} không phải là số nguyên tố`);
}
songuyento(n);
let filterarray = array.filter(songuyento);
console.log(filterarray);
