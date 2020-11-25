const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const url = require("url");
const ArticalModel = require("../models/artical");

//查询全列表
router.get("/list", (req, res) => {
    ArticalModel.find({}, (err, docs) => {
        if (err) {
            console.log("列表查询失败:", err);
            return;
        }
        res.send(docs);
    });
});

//根据book_id查询book详情
router.get("/detail", (req, res) => {
    const id = url.parse(req.url, true).query.id;
    console.log("id=", id);
    const sid = mongoose.Types.ObjectId(id)
    ArticalModel.findOne({ "_id": sid }, (err, docs) => {
        if (err) {
            console.log("根据id查询失败:", err);
            return;
        }
        res.send(docs);
    })
})

//新增
router.post("/add", (req, res) => {
    const obj = new ArticalModel({
        ...req.body,
        create_time: Date.now()
    });
    obj.save((err) => {
        if (err) {
            console.log("新增失败:", err);
            return;
        }
        res.status(200).send("新增成功");
    });
})

//根据id删除cate
router.get("/delete", (req, res) => {
    const id = url.parse(req.url, true).query.id;
    const sid = mongoose.Types.ObjectId(id);

    ArticalModel.findByIdAndDelete(sid, (err) => {

        if (err) {
            console.log("删除失败:", err);
            return;
        }
        res.status(200).send("删除成功");
    })
})


module.exports = router;