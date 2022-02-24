const min = (a, b, c) => {
    let min, max;
    if (a < b) {
        min = a;
    } else {
        min = b;
    }
    if (min < c) {
        min = min;
    } else {
        min = c;
    }
    console.log(`min la: ${min}`);

}
min(43333, 1235, 715454);
const max = (a, b, c) => {
    let max;
    if (a > b) {
        max = a;
    } else {
        max = b;
    }
    if (max > c) {
        max = max;
    } else {
        max = c;
    }
    console.log(`max la: ${max}`);
}
max(4342, 554, 223);