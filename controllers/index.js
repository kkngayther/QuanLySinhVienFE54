
var mangSinhVien = [];
var validate = new Validation();

document.querySelector('#btnXacNhan').onclick = function () {
    var sv = new SinhVien();
    sv.maSV = document.querySelector('#maSinhVien').value;
    sv.tenSV = document.querySelector('#tenSinhVien').value;
    sv.loaiSV = document.querySelector('#loaiSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;

    console.log(sv);
    // Them 1 sinh vien vao mang
    console.log(mangSinhVien);

    var valid = true;

    valid = validate.kiemTraRong(sv.maSV, 'Ma sinh vien', '.kiemTraRong-maSinhVien')
        & validate.kiemTraRong(sv.tenSV, 'Ten sinh vien', '.kiemTraRong-tenSinhVien')
        & validate.kiemTraRong(sv.email, 'Email', '.kiemTraRong-email')
        & validate.kiemTraRong(sv.soDienThoai, 'So dien thoai', '.kiemTraRong-soDienThoai')
        & validate.kiemTraRong(sv.diemToan, 'Diem Toan', '.kiemTraRong-diemToan')
        & validate.kiemTraRong(sv.diemLy, 'Diem Ly', '.kiemTraRong-diemLy')
        & validate.kiemTraRong(sv.diemHoa, 'Diem Hoa', '.kiemTraRong-diemHoa')
        & validate.kiemTraRong(sv.diemRenLuyen, 'Diem Ren Luyen', '.kiemTraRong-diemRenLuyen');
    //Kiem tra hop le
    // if (sv.maSV.trim() === ''){
    //     //Dom den the loi kiemTraRong-maSinhVien ==> ghi noi dung loi vao innerHTML
    //     document.querySelector('.kiemTraRong-maSinhVien').innerHTML = 'Ma sinh vien khong duoc bo trong!';
    //     valid = false;
    // }
    // else{
    //     document.querySelector('.kiemTraRong-maSinhVien').innerHTML = '';
    // }

    // if (sv.tenSV.trim() === ''){
    //     //Dom den the loi kiemTraRong-maSinhVien ==> ghi noi dung loi vao innerHTML
    //     document.querySelector('.kiemTraRong-tenSinhVien').innerHTML = 'Ten sinh vien khong duoc bo trong!';
    //     valid = false;
    // }
    // else{
    //     document.querySelector('.kiemTraRong-tenSinhVien').innerHTML = '';
    // }

    // if (sv.email.trim() === ''){
    //     //Dom den the loi kiemTraRong-maSinhVien ==> ghi noi dung loi vao innerHTML
    //     document.querySelector('.kiemTraRong-email').innerHTML = 'Email khong duoc bo trong!';
    //     valid = false;
    // }
    // else{
    //     document.querySelector('.kiemTraRong-email').innerHTML = '';
    // }

    // if (sv.soDienThoai.trim() === ''){
    //     //Dom den the loi kiemTraRong-maSinhVien ==> ghi noi dung loi vao innerHTML
    //     document.querySelector('.kiemTraRong-soDienThoai').innerHTML = 'So dien thoai khong duoc bo trong!';
    //     valid = false;
    // }
    // else{
    //     document.querySelector('.kiemTraRong-soDienThoai').innerHTML = '';
    // }

    // if (sv.diemToan.trim() === ''){
    //     //Dom den the loi kiemTraRong-maSinhVien ==> ghi noi dung loi vao innerHTML
    //     document.querySelector('.kiemTraRong-diemToan').innerHTML = 'Diem Toan khong duoc bo trong!';
    //     valid = false;
    // }
    // else{
    //     document.querySelector('.kiemTraRong-diemToan').innerHTML = '';
    // }

    // if (sv.diemLy.trim() === ''){
    //     //Dom den the loi kiemTraRong-maSinhVien ==> ghi noi dung loi vao innerHTML
    //     document.querySelector('.kiemTraRong-diemLy').innerHTML = 'Diem Ly khong duoc bo trong!';
    //     valid = false;
    // }
    // else{
    //     document.querySelector('.kiemTraRong-diemLy').innerHTML = '';
    // }

    // if (sv.diemHoa.trim() === ''){
    //     //Dom den the loi kiemTraRong-maSinhVien ==> ghi noi dung loi vao innerHTML
    //     document.querySelector('.kiemTraRong-diemHoa').innerHTML = 'Diem Hoa khong duoc bo trong!';
    //     valid = false;
    // }
    // else{
    //     document.querySelector('.kiemTraRong-diemHoa').innerHTML = '';
    // }

    // if (sv.diemRenLuyen.trim() === ''){
    //     //Dom den the loi kiemTraRong-maSinhVien ==> ghi noi dung loi vao innerHTML
    //     document.querySelector('.kiemTraRong-diemRenLuyen').innerHTML = 'Diem Ren Luyen khong duoc bo trong!';
    //     valid = false;
    // }
    // else{
    //     document.querySelector('.kiemTraRong-diemRenLuyen').innerHTML = '';
    // }
    // Kiem tra dinh dang
    valid &= validate.kiemTraEmail(sv.email, 'Email', '.kiemTraDinhDang-email')
        & validate.kiemTraTatCaKyTu(sv.tenSV, 'Ten Sinh Vien', '.kiemTraDinhDang-tenSinhVien')

        & validate.kiemTraTatCaSo(sv.soDienThoai, 'So Dien Thoai', '.kiemTraDinhDang-soDienThoai')
        & validate.kiemTraTatCaSo(sv.diemToan, 'Diem Toan', '.kiemTraDinhDang-diemToan')
        & validate.kiemTraTatCaSo(sv.diemLy, 'Diem Ly', '.kiemTraDinhDang-diemLy')
        & validate.kiemTraTatCaSo(sv.diemHoa, 'Diem Hoa', '.kiemTraDinhDang-diemHoa')
        & validate.kiemTraTatCaSo(sv.diemRenLuyen, 'Diem Ren Luyen', '.kiemTraDinhDang-diemRenLuyen')

        & validate.kiemTraGiaTri(sv.diemToan, 'Diem Toan', '.kiemTraGiaTri-diemToan', 0, 10)
        & validate.kiemTraGiaTri(sv.diemLy, 'Diem Ly', '.kiemTraGiaTri-diemLy', 0, 10)
        & validate.kiemTraGiaTri(sv.diemHoa, 'Diem Hoa', '.kiemTraGiaTri-diemHoa', 0, 10)
        & validate.kiemTraGiaTri(sv.diemRenLuyen, 'Diem Ren Luyen', '.kiemTraGiaTri-diemRenLuyen', 0, 10)

        & validate.kiemTraDoDaiChuoi(sv.tenSV, 'Ten Sinh Vien', '.kiemTraDoDaiChuoi-tenSinhVien', 6, 50)
        & validate.kiemTraDoDaiChuoi(sv.email, 'Email', '.kiemTraDoDaiChuoi-email', 6, 32);

    if (!valid) {
        return;
    }

    mangSinhVien.push(sv);

    //Them 1 sinh vien vao mang
    renderTable(mangSinhVien);

    // Luu vao localstorage
    luuLocalStorage();

}
var renderTable = function (arrSV) {
    // Tu mang sinh vien tao ra 1 chuoi html nhieu the tr dua vao vong lap
    var noiDungTable = '';
    for (var index = 0; index < arrSV.length; index++) {
        var sinhVien = arrSV[index];
        var sv = new SinhVien(sinhVien.maSV, sinhVien.tenSV, sinhVien.loaiSV, sinhVien.email, sinhVien.soDienThoai, sinhVien.diemToan, sinhVien.diemLy, sinhVien.diemHoa, sinhVien.diemRenLuyen);
        sv.maSV = sinhVien.maSV;
        sv.tenSV = sinhVien.tenSV;
        sv.email = sinhVien.email;
        sv.soDienThoai = sinhVien.soDienThoai;
        sv.diemToan = sinhVien.diemToan;
        sv.diemLy = sinhVien.diemLy;
        sv.diemHoa = sinhVien.diemHoa;
        sv.diemRenLuyen = sinhVien.diemRenLuyen;
        sv.loaiSV = sinhVien.loaiSV;
        // Tao ra 1 chuoi + don vao noi dung <tr></tr>
        noiDungTable += `
            <tr>
                <td>${sv.maSV}</td>
                <td>${sv.tenSV}</td>
                <td>${sv.email}</td>
                <td>${sv.soDienThoai}</td>
                <td>${sv.loaiSV}</td>
                <td>${sv.tinhDiemTrungBinh()}</td>
                <td>${sv.xepLoai()}</td>
                <td><button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSV}')">Xoa</button></td>
                <td><button class="btn btn-primary" onclick="suaSinhVien('${sv.maSV}')">Sua</button></td>
            </tr>
        `
    }
    //console.log(noiDungTable);
    document.querySelector('#tableSinhVien').innerHTML = noiDungTable;
}
var xoaSinhVien = function (maSVien) {
    for (var i = mangSinhVien.length - 1; i >= 0; i--) {
        var sv = mangSinhVien[i];
        if (maSVien === sv.maSV) {
            // splice la ham xoa phan tu cua mang dua vao index
            mangSinhVien.splice(i, 1);
        }
    }
    //Sau khi xoa du lieu trong mang goi ham tao lai table
    renderTable(mangSinhVien);
}
var suaSinhVien = function (maSV) {
    document.querySelector('#maSinhVien').disabled = true;
    for (var i = 0; i < mangSinhVien.length; i++) {
        var sv = mangSinhVien[i];
        if (maSV === sv.maSV) {
            document.querySelector('#maSinhVien').value = sv.maSV;
            document.querySelector('#tenSinhVien').value = sv.tenSV;
            document.querySelector('#loaiSinhVien').value = sv.loaiSV;
            document.querySelector('#email').value = sv.email;
            document.querySelector('#soDienThoai').value = sv.soDienThoai;
            document.querySelector('#diemToan').value = sv.diemToan;
            document.querySelector('#diemLy').value = sv.diemLy;
            document.querySelector('#diemHoa').value = sv.diemHoa;
            document.querySelector('#diemRenLuyen').value = sv.diemRenLuyen;
        }
    }
}

var luuLocalStorage = function () {
    // Bien mang sinh vien thanh chuoi
    var sMangSinhVien = JSON.stringify(mangSinhVien);
    // Dem chuoi mangSinhVien luu vao localstorage
    localStorage.setItem('mangSinhVien', sMangSinhVien);
}

// Viet phuong thuc lay du lieu tu local storage
var layMangSinhVien = function () {
    // kiem tra du lieu co trong local storage ko ???
    if (localStorage.getItem('mangSinhVien')) {
        var sMangSinhVien = localStorage.getItem('mangSinhVien');
        //Bien du lieu tu chuoi chuyen ve object
        mangSinhVien = JSON.parse(sMangSinhVien);
        renderTable(mangSinhVien);
    }
}

layMangSinhVien();

document.querySelector('#btnLuuThongTin').onclick = function(){
    document.querySelector('#maSinhVien').disabled = false;
    var sv = new SinhVien();
    sv.maSV = document.querySelector('#maSinhVien').value;
    sv.tenSV = document.querySelector('#tenSinhVien').value;
    sv.loaiSV = document.querySelector('#loaiSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;

    for (var i = 0; i < mangSinhVien.length; i++){
        var sinhVienCapNhat = mangSinhVien[i];
        if (sinhVienCapNhat.maSV === sv.maSV){
            sinhVienCapNhat.maSV = sv.maSV;
            sinhVienCapNhat.tenSV = sv.tenSV;
            sinhVienCapNhat.email = sv.email;
            sinhVienCapNhat.soDienThoai = sv.soDienThoai;
            sinhVienCapNhat.diemToan = sv.diemToan;
            sinhVienCapNhat.diemLy = sv.diemLy;
            sinhVienCapNhat.diemHoa = sv.diemHoa;
            sinhVienCapNhat.diemRenLuyen = sv.diemRenLuyen;
        }
    }
    renderTable(mangSinhVien);
    luuLocalStorage();
}