const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Cấu hình middleware để phục vụ các tệp tĩnh từ thư mục "public"
app.use(express.static(path.join(__dirname, 'public')));

// Route cơ bản
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Khởi động máy chủ
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
