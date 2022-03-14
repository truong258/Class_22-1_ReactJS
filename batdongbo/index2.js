function cong(a, b, cb) {
    console.log("bat dau cong");
    setTimeout(() => {
        let tong = a + b;
        console.log("ket qua cua phep cong la", tong);
        cb(tong);
    }, 2000)
}
function nhan(a, b, cb) {
    console.log("bat dau nhan");
    setTimeout(() => {
        let tich = a * b;
        console.log("ket qua cua phep nhan", tich);
        cb(tich);
    }, 3000)
}
function chia(a, b, cb) {
    console.log("bat dau chia");
    setTimeout(() => {
        let thuong = a / b;
        console.log("ket qua cua phep chia", thuong);
        cb(thuong)
    }, 4000);
}
function ketqua(a, b, m, n, k, cb) {
    cong(a, b, (ketquacong) => {
        chia(ketquacong, m, (ketquachia) => {
            nhan(ketquachia, n, (ketquanhan) => {
                cong(ketquanhan, 8, (ketquacong2) => {
                    nhan(ketquacong2, k, (ketquacuoi) => {
                        cb(ketquacuoi)
                    })
                })

            })
        })
    })
}
ketqua(3, 7, 2, 6, 2, (result) => {
    console.log("ketquala", result);
})

//(((a+b)/m*n)+8)*k