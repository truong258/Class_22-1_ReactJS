function sodoixung(n) {
    let temp;
    let sum = 0;
    let r;
    for (temp = n; n != 0; n = (n - (n % 10)) / 10) {
        r = n % 10;
        sum = sum * 10 + r;
    }
    if (temp == sum) {
        console.log("là số đối xứng");
    } else {
        console.log("Không phải là số đối xứng");
    }
}
sodoixung(1224);