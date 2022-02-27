let array = [2, 3, 4, 3, 6, 4, 6, 3, 2, 2];
let sum = 0;
const tongmang = (array) => {
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}
tongmang(array);