let x = 37;
let dem = 0;
for (let i = 2; i < Math.sqrt(x); i++) {
    if (x % i == 0) {
        dem++;
    }
}
if (dem == 0) {
    console.log(`${x} là số ngyên tố`)
} else {
    console.log(`${x} không phải là số nguyên tố`)
}