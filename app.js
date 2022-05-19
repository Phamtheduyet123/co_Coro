let arr;
//Tạo 1 mảng để chứa X || O và gán giá trọ cho các phần tử bằng rỗng
function createArraylet() {
    arr = new Array(20);
    for (let i = 0; i < 20; i++) {
        arr[i] = new Array(20);
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = "";
        }
    }
}

let checkPlayer1;
let choose;
// Cho phép người dùng tuỳ chọn X || O
function chooseNumber() {
    choose = parseInt(prompt(" Người đi trước được chọn:  " + "(1) để chọn (x) / (2) để chọn(o)"));
    if (choose == 1) {
        checkPlayer1 = true;
    } else {
        checkPlayer1 = false;
    }
}
//Gọi hàm
createArraylet();
chooseNumber();
display();