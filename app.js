const express = require("express");
const bodyParser = require("body-parser");
const artical = require("./routes/artical");
const app = express();

//静态资源
app.use(express.static("static"));
//第三方中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//文章模块
app.use("/api/artical", artical);





//错误处理中间件
app.use((req, res, next) => {
    res.status(404).send("404,页面找不到");
});

app.listen(3070);