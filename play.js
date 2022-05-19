//Hàm xử lí bắt sự kiện click của người dùng
function play(i, j) {
    if (checkPlayer1 && isNotDaTa(i, j)) {
        arr[i][j] = "x";
        checkPlayer1 = false;
        if (checkWin()) {
            if (choose == 1) {
                alert("Người đi trước chiến thắng!")
            } else {
                alert("người đi sau chiến thắng");
            }
        }

    } else if (!checkPlayer1 && isNotDaTa(i, j)) {
        arr[i][j] = 'o';
        checkPlayer1 = true;
        if (checkWin()) {
            if (choose == 2) {
                alert("Người đi trước chiến thắng!")
            } else {
                alert("người đi sau chiến thắng")
            }
        }
    }
    display();
}

