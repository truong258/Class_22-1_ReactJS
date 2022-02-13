let n = 10;
let x;
function songuyento(x) {
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}
for (let i = 2; i <= n; i++) {
    if (songuyento(i)) {
        console.log(i);
    }
}