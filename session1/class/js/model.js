// file dùng để lưu dữ liệu gnười dùng
const model = {};

//1. khỏi tạo dữ liệu trống

model.authUser = undefined;

//2. Cập nhật thông tin sau khi đăng nhập thành công

model.loginSuccess = authUser => {
    model.authUser = authUser;
}