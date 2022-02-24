function xoakhoangtrang(str) {
    console.log(str.length);
    str = str.replace(/ /g, "");
    console.log(str);
    console.log(str.length);
}
xoakhoangtrang(" hello  word     ");

function xoakhoangtrang2(str2) {
    console.log(str2.length);
    for (let i = 0; i <= str2.length; i++) {
        if (str2[i] == " ") {
            str2 = str2.replace(" ", "");
        }
    }
    console.log(str2);
    console.log(str2.length);
}
xoakhoangtrang2(" hello  word     ");