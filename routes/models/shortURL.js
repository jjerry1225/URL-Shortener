// 引用 Express 與 Express 路由器
const express = require("express");
const router = express.Router();

// 連接url model
const URL = require("../../models/url");

// 製造shortURL的function
const elements =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function shortenURL() {
  let result = "";

  for (let i = 0; i < 5; i++) {
    let letter = elements[Math.floor(Math.random() * elements.length)];
    result += letter;
  }

  return result;
}

// setting route
router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  if (!req.body.url) {
    return res.redirect("/");
  }

  let shortURL = shortenURL();

  URL.findOne({ originalURL: req.body.url })
    .then((data) =>
      data ? data : URL.create({ shortURL, originalURL: req.body.url })
    )
    .then((data) => res.render("index", { shortURL: data.shortURL }))
    .catch((error) => console.log(error));
});

router.get("/:shortURL", (req, res) => {
  const shortName = req.params.shortURL;

  URL.findOne({ shortURL: shortName })
    .then((data) => {
      if (!data) {
        return res.render("error", { shortName }); 
      }
      res.redirect(data.originalURL);
    })
    .catch((error) => console.log(error));
});

// 匯出路由模組
module.exports = router;
