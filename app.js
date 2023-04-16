const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const PORT = process.env.PORT;

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// 引用路由器，路徑設定為 /routes 就會自動去尋找目錄下叫做 index 的檔案。
const routes = require("./routes")

const app = express();

// 引用連線mongoose的檔案，對 app.js 而言，Mongoose 連線設定只需要「被執行」，不需要接到任何回傳參數繼續利用，所以這裡不需要再設定變數。
require("./config/mongoose");

// 套用express-handlebars的模板引擎
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// 套用body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// setting route
app.use(routes)

// start and listen server
app.listen(PORT, () => {
  console.log(`Express is listening on http://localhost:${PORT}`);
});
