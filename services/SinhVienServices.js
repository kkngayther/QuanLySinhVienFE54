var SinhVienService = function(){
    this.layThongTinSinhVien = function(){
        var promise = axios({
            url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien', //BE cung cap
            method: 'GET' // BE cung cap
        }); 
        return promise;
    }
    this.themSinhVien = function(sv){
        var promise = axios({
            url: 'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',
            method: 'POST',
            data: sv // Du lieu gui di (phai dung format backend yeu cau)
        });
        return promise;
    }
    this.xoaSinhVien = function(maSinhVien){
        var promise = axios({
            url: 'http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=' + maSinhVien,
            method: 'DELETE',
        });
        return promise;
    }
    this.suaSinhVien = function(maSinhVien){
        var promise = axios({
            url: 'http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=' + maSinhVien,
            method: 'GET'
        });
        return promise;
    }
    this.luuThongTin = function(maSinhVien, sv){
        var promise = axios({
            url: 'http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=' + maSinhVien,
            method: 'PUT',
            data: sv
        });
        return promise;
    }
}