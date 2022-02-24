
let string = "https://www.facebook.com/mainguyen.nhattruong.daylaem.74343/";
array = string.split("/");
let result = array[array.length - 2];
console.log(result);
array2 = result.split(".");
let name = "";
for (let j = 0; j < array2.length; j++) {
    name = array2[0] + array2[array2.length - 2];
}
console.log(name);
let id = array2[array2.length - 1];
console.log(id);