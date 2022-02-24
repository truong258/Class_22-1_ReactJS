// function demtu(str) {
//     let dem = 1;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             dem++;
//         }
//     }
//     console.log(dem);
// }
// demtu("mai nguyen nhat truong");
// string2 = "nhat";
// for ()
let str1 = "mai nguyen nhat truong";
let string = str1.split(" ");
console.log(string);
console.log(string.length);

// mang("mai nguyen nhat truong");
let str2 = "maig";
for (let i = 0; i < string.length; i++) {
    if (str2 === string[i]) {
        console.log(i);
    } else {
        return console.log("khong co tu nao trong chuoi 1");
    }
}
