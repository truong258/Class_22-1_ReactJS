function demkhoangtrang(str) {
    var dem = 0;
    for (let i = 0; i < str.length; i++) {

        if (str[i] === " ") {
            dem++;
        }
    }
    console.log(dem++);
}
demkhoangtrang("    Hello word");