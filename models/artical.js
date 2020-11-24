const mongoose = require("./db");

const ArticalSchema = mongoose.Schema({
    title: String,
    content: String,
    desc: String,
    // pics: String,
    create_time: Date,
});

module.exports = mongoose.model("Artical", ArticalSchema, "artical");