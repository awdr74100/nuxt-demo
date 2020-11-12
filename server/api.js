const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.send({ title: "Roya", message: "Hello World" });
});

app.get("/courses", (req, res) => {
  res.send({
    courses: [
      {
        id: 1,
        name: "進入 python 的魔法世界 - 第一次學程式入門課",
        color: "#b5b5ac",
        img: "https://bulma.io/images/placeholders/1280x960.png",
        description:
          "這堂課使用python turtle 模組來創造幾何畫作，課程使用繪圖指令來講述程式語言的重要觀念，讓你打好程式語言的基礎。",
        introduction: ""
      },
      {
        id: 2,
        name: "基礎教學資訊科技基礎教學",
        color: "#b5b5ac",
        img: "https://bulma.io/images/placeholders/1280x960.png",
        description: "這堂課教導基礎教學資訊科技基礎教學。",
        introduction: ""
      },
      {
        id: 3,
        name: "illustrator基礎教學",
        color: "#f52e36",
        img: "https://bulma.io/images/placeholders/1280x960.png",
        description: "這堂課教導illustrator。",
        introduction: ""
      }
    ]
  });
});

module.exports = app;
