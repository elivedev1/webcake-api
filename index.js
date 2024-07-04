const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8080;

// Middleware để phân tích body của yêu cầu
app.use(bodyParser.json());

// Route GET đơn giản
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Route POST
app.post("/submit", (req, res) => {
  const data = req.body;
  console.log(data); // In dữ liệu nhận được từ client
  res.send("Data received");
});

// Middleware xử lý lỗi
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Xử lý sự kiện 'error'
server.on("error", (err) => {
  console.error("Server error:", err);
});
