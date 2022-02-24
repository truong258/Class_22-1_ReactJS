function daonguocchuoi(str) {
    let chuoi = "";
    for (let i = str.length - 1; i >= 0; i--) {
        chuoi += str[i];
    }
    console.log(chuoi);
}
daonguocchuoi("nhattruong");