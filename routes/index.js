// 引用 Express 與 Express 路由器
const express = require("express")
const router = express.Router()

const shortURL = require("./models/shortURL")

router.use("/", shortURL)

module.exports = router