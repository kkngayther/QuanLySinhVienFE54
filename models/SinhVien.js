// Khai boa lop doi tuong trong JS (prototype)
var SinhVien = function(maSinhVien,tenSinhVien,loaiSinhVien,email,diemToan,diemLy,diemHoa,diemRenLuyen){
    this.maSV = maSinhVien;
    this.tenSV = tenSinhVien;
    this.loaiSV = loaiSinhVien;
    this.email = email;
    // this.soDienThoai = soDienThoai;
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
    this.diemRenLuyen = diemRenLuyen;
    this.tinhDiemTrungBinh = function(){
        var dtb = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
        return dtb;
    }
    this.xepLoai = function(){
        var dtb = this.tinhDiemTrungBinh();
        if (this.diemRenLuyen < 5){
            return 'Yeu';
        }
        else {
            if (dtb >= 9){
                return 'Xuat Sac';
            }
            else if (dtb >= 8){
                return 'Gioi';
            }
            else if (dtb >= 7){
                return 'Kha';
            }
            else if (dtb >= 6){
                return 'Trung Binh Kha';
            }
            else if (dtb >= 5){
                return 'Trung Binh';
            }
            else {
                return 'Yeu';
            }
        }
    }
}