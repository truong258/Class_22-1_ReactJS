let n = 33334;
function dem(n) {
    let dem = 0;
    while (n > 0) {
        n = (n - (n % 10)) / 10;
        dem++;
    }
    console.log(dem);
}
dem(n);

// console.log(dem(n));
function kiemtracacsotaothanh(n) {
    for (let i = 1; i <= dem(n); i++) {
        if (n % 2 != 0) {
            n = (n - (n % 10)) / 10;
        } else {
            return false;
        }
    }
    return true;
}
if (kiemtracacsotaothanh(n)) {
    console.log(`${n} được tạo thành từ các số lẻ`);
} else {
    console.log(`${n} không được tạo thành từ các số lẻ`);
}

function getRandomInt(max) {
    return Math.round(Math.random()) * max;
}
console.log(getRandomInt(6));


