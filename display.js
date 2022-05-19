//Tạo bảng in ra các phần tử trong mảng, mỗi <td> chứa 1 phần tử trong mảng(xem ở dòng thứ 20).
function display() {
    let stringTable = '<table border="1">';
    for (let i = 0; i < 10; i++) {
        stringTable += '<tr>';
        for (let j = 0; j < 10; j++) {
            if(arr[i][j]=="x"){
                stringTable += '<td class="text-color-red" onclick="play(' + i + ' ,' + j + ')" >' + arr[i][j] + '</td>';
            }
            else if(arr[i][j]=="o") {
                stringTable += '<td class="text-color-blue" onclick="play(' + i + ' ,' + j + ')" >' + arr[i][j] + '</td>';
            }
            else {
                stringTable += '<td onclick="play(' + i + ' ,' + j + ')" >' + arr[i][j] + '</td>';
            }
        }
        stringTable += '</tr>';
    }
    stringTable += '</table>';
    document.getElementById("Demo").innerHTML = stringTable;
}
