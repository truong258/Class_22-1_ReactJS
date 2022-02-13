let a = 5;
let b = 8;
let c = 3;
let x1, x2;
let delta;
delta = b * b - (4 * a * c);
if (delta < 0) {
    console.log("Phương trình vô nghiệm");
}
else if (delta == 0) {
    console.log(x1 = -b / (2 * a));
    console.log(x2 = -b / (2 * a));
}
else {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`X1 là:`, x1);
    console.log(`X2 là: `, x2);
}