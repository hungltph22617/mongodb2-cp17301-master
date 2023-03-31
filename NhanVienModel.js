var mongoose = require('mongoose');
var NhanVienSchema = new mongoose.Schema({
    ten:String,
    diachi:String,
    luong:Number
});
module.exports = mongoose.model("nhanvien", NhanVienSchema);