let x;
function tongsole(x) {
    let sum = 0;
    for (let i = 1; i <= x; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    console.log(sum);
}
tongsole(5);