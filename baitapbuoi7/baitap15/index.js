// let string = "mAi Nguyen nhAt TrUong";

function chuanhoa(string) {
    let sentence = string.toLowerCase().split(" ");
    console.log(sentence)
    console.log(sentence.length);


    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence);

    return sentence.join(" ");
}
console.log(chuanhoa("mAI NguyEn NhAT trUoNG"));