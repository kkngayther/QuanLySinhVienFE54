// console.log(axios)
var service = new SinhVienService();
// Ket noi back-end
var layDanhSachSinhVienAPI = function () {

    var promises = service.layThongTinSinhVien();
    // Xu ly cho truong hop goi thanh cong
    promises.then(function (result) {
        console.log('Ket qua', result.data);
        renderTable(result.data);
    });

    // Xu ly cho truong hop that bai
    promises.catch(function (error) {
        console.log(error);
    });

    // renderTable();
}

var renderTable = function (mangSinhVien) {
    var noiDungTable = '';
    for (var i = 0; i < mangSinhVien.length; i++) {
        var sv = new SinhVien();
        sv.maSinhVien = mangSinhVien[i].maSinhVien;
        sv.tenSinhVien = mangSinhVien[i].tenSinhVien;
        sv.diemToan = mangSinhVien[i].diemToan;
        sv.diemLy = mangSinhVien[i].diemLy;
        sv.diemHoa = mangSinhVien[i].diemHoa;
        sv.diemRenLuyen = mangSinhVien[i].diemRenLuyen;
        sv.loaiSinhVien = mangSinhVien[i].loaiSinhVien;
        sv.email = mangSinhVien[i].email;

        noiDungTable += `
            <tr>
                <td>${sv.maSinhVien}</td>
                <td>${sv.tenSinhVien}</td>
                <td>${sv.email}</td>
                <td>${sv.loaiSinhVien}</td>
                <td>${sv.tinhDiemTrungBinh()}</td>
                <td>${sv.xepLoai()}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSinhVien}')">Delete</button>
                    <button class="btn btn-primary" onclick="suaSinhVien('${sv.maSinhVien}')">Edit</button>
                </td>
            </tr>
        `
    }
    document.querySelector('#tableSinhVien').innerHTML = noiDungTable;
}

layDanhSachSinhVienAPI();

// Chuc nang them sinh vien luu tru vao server thong qua API backend
document.querySelector('#btnXacNhan').onclick = function () {
    // Lay du lieu thu nguoi dung nhap vao
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;

    console.log(sv);

    var promise = service.themSinhVien(sv);

    // Ham thuc thi khi goi ajax thanh cong
    promise.then(function (result) {
        console.log(result.data);
        // Goi phuong thuc sinh vien tao lai table moi
        layDanhSachSinhVienAPI();
    });
    // Ham thuc thi khi loi xay ra
    promise.catch(function (error) {
        console.log(error.response.data);
    });
}

// Xoa sinh vien server
var xoaSinhVien = function (maSinhVien) {
    var promise = service.xoaSinhVien(maSinhVien);

    promise.then(function (result) {
        console.log(result.data);
        layDanhSachSinhVienAPI();
    });
    promise.catch(function (error) {
        console.log(error.response.data);
    });
}

var suaSinhVien = function (maSinhVien) {
    var promise = service.suaSinhVien(maSinhVien);
    promise.then(function (result) {
        console.log(result.data);
        // Gan du lieu server tra ve len giao dien nguoi dung
        document.querySelector('#maSinhVien').value = result.data.maSinhVien;
        document.querySelector('#tenSinhVien').value = result.data.tenSinhVien;
        document.querySelector('#loaiSinhVien').value = result.data.loaiSinhVien;
        document.querySelector('#email').value = result.data.email;
        document.querySelector('#diemToan').value = result.data.diemToan;
        document.querySelector('#diemLy').value = result.data.diemLy;
        document.querySelector('#diemHoa').value = result.data.diemHoa;
        document.querySelector('#diemRenLuyen').value = result.data.diemRenLuyen;
        //layDanhSachSinhVienAPI();
    });
    promise.catch(function (error) {
        console.log(error.response.data);
    });
}
// Chuc nang luu thong tin sinh vien server
document.querySelector('#btnLuuThongTin').onclick = function () {
    // Lay du lieu nguoi dung nhap dua vao doi tuong
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;

    var promise = service.luuThongTin(sv.maSinhVien, sv);
    promise.then(function(result){
        console.log(result.data);
        layDanhSachSinhVienAPI();
    });
    promise.catch(function(error){
        console.log(error.response.data);
    });
}