let array = [3, 2, 4, 2, 2, 4, 4, 1, 6, 7, 3, 4, 8, 9, 3];
let sortarrray = array.sort();
let min, max, middle;
min = array[0];
max = array[array.length - 1];
middle = (min + max) / 2;
console.log(`so lon nhat la ${max}`);
console.log(`so nho nhat la ${min}`);
console.log(`so trung gian la ${middle}`);