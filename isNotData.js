// Hàm kiểm tra xem ô đã có dữ liệu hay chưa.
function isNotDaTa(i, j) {
    if (arr[i][j] == "") {
        return true;
    } else {
        alert("Ô này đánh rồi");
        return false;
    }
}