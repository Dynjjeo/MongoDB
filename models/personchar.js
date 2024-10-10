const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Định nghĩa lược đồ (schema) cho 'Person'
const PersonSchema = new Schema({
    name: String,
    height: Number,
    weight: Number,
});

// Tạo mô hình (model) 'personchar' dựa trên lược đồ
const PersonChar = mongoose.model('personchar', PersonSchema);

// Xuất mô hình để có thể sử dụng ở file khác
module.exports = PersonChar;

// Kết nối tới MongoDB (thay đổi URL theo MongoDB của bạn)
mongoose.connect('mongodb://localhost:27017/testdb');

mongoose.connection.once('open', () => {
    console.log("Kết nối thành công tới MongoDB!");

    // Thêm một tài liệu (document) mới vào bộ sưu tập 'personchars'
    const person = new PersonChar({
        name: "Nguyen Van A",
        height: 175,
        weight: 70
    });

    person.save().then(() => console.log("Dữ liệu đã được lưu!"))
        .catch(error => console.log("Lỗi khi lưu dữ liệu", error));
}).on('error', error => {
    console.log("Kết nối bị lỗi:", error);
});
