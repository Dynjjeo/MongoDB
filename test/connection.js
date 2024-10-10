// Import mongoose để làm việc với MongoDB
const mongoose = require("mongoose");

// Kết nối đến MongoDB tại địa chỉ localhost và tên database là testdb
mongoose.connect('mongodb://localhost/testdb');

// Lắng nghe sự kiện 'open' để xác nhận khi kết nối được thiết lập thành công
mongoose.connection.once('open', function(){
    console.log("Kết nối đã được thực hiện");  // Hiển thị thông báo khi kết nối thành công
}).on("error", function(error){
    console.log("Kết nối bị lỗi", error);  // Hiển thị thông báo và lỗi nếu quá trình kết nối thất bại
});
