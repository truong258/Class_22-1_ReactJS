function dem(n) {
    let dem = 0;
    while (n > 0) {
        n = (n - (n % 10)) / 10;
        dem++;
    }
    console.log(dem);
}
let n = 3333454653;
let x = dem(33334);
console.log(x);
// console.log(dem(n));
function kiemtracacsotaothanh(n) {
    for (let i = 1; i <= 10; i++) {
        console.log("hung");
        if (n % 2 != 0) {
            n = (n - (n % 10)) / 10;
            console.log("ruong");
        } else {
            return false;
        }
    }
    return true;
    console.log('khong đươc');
}
if (kiemtracacsotaothanh(n)) {
    console.log(`${n} được tạo thành từ các số lẻ`);
} else {
    console.log(`${n} không được tạo thành từ các số lẻ`);
}
