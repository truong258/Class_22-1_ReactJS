let aarr = [4, 3, 5, 3, 4, 2, 1, 2, 3, 3, 45, 5, 6, 7, 8, 8, 8, 8, 3, 2, 1, 1];
let tansuat = 1;
let count = 0;
let item;
for (let i = 0; i < aarr.length; i++) {
    for (let j = i; j < aarr.length; j++) {
        if (aarr[i] == aarr[j]) {
            count++;
        }
        if (tansuat < count) {
            tansuat = count;
            item = aarr[i];
        }
    }
    count = 0;
}
console.log("tần suất: ", tansuat);
console.log("số có tần suất nhiều nhất: ", item);

// var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// var counts = {};

// for (var i = 0; i < arr.length; i++) {
//     var num = arr[i];
//     counts[num] = counts[num] ? counts[num] + 1 : 1;
// }

// console.log(counts[5], counts[2], counts[9], counts[4]);