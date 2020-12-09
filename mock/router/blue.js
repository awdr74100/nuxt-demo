const express = require("express");
const app = express();
const sleep = require("../utils/sleep");

let API = require("../../api");

for (let key in API.member) {
  API.member[key].url = API.member[key].url.replace(":", "[:]"); // node 路由跳脫字元處理
}

app.get("/", async (req, res, next) => {
  await sleep(0);
  res.json({
    message: "wayne1894_nuxt api v1"
  });
});

//會員註冊 with email / password
app.post(API.member.registered.url, async (req, res, next) => {
  await sleep(0);
  // console.log(req.body, "req.body");
  // console.log(req.params, "req.params");
  res.status(200);
  res.json({
    idToken: "[ID_TOKEN]",
    email: "[user@example.com]",
    refreshToken: "[REFRESH_TOKEN]",
    expiresIn: "3600",
    localId: "tRcfmLH7..."
  });
});

//會員登入 with email / password
app.post(API.member.login.url, async (req, res, next) => {
  await sleep(0);
  // console.log(req.body, "req.body");
  // console.log(req.params, "req.params");
  res.status(200);
  res.json({
    localId: "ZY1rJK0eYLg...",
    email: "[user@example.com]",
    displayName: "",
    idToken: "[ID_TOKEN]",
    registered: true,
    refreshToken: "[REFRESH_TOKEN]",
    expiresIn: "3600"
  });
});

//使用 refresh token 換取 ID token
app.post(API.member.exchangeToken.url, async (req, res, next) => {
  await sleep(0);
  // res.cookie("token", "ddddd", { httpOnly: true });
  res.status(200);
  res.json({
    expires_in: "3600",
    token_type: "Bearer",
    refresh_token: "[REFRESH_TOKEN]",
    id_token: "[ID_TOKEN]",
    user_id: "tRcfmLH7o2XrNELi...",
    project_id: "1234567890"
  });
});

//取得課程資訊
app.get(API.getCourses.url, async (req, res, next) => {
  await sleep(0);
  // console.log(req.params.name, "req.params.name");
  res.status(200);
  res.json({
    color: "#f52e36",
    description:
      "這堂課使用python turtle 模組來創造幾何畫作，課程使用繪圖指令來講述程式語言的重要觀念，讓你打好程式語言的基礎。",
    img: "https://bulma.io/images/placeholders/1280x960.png",
    introduction: "課程介紹課程介紹課程介紹",
    name: "進入 python 的魔法世界 - 第一次學程式入門課"
  });
});

//取得課程資訊 - 首頁列表
app.get(API.getCoursesList.url, async (req, res, next) => {
  await sleep(0);
  res.status(200);
  res.json({
    "-M7Ceyp-S3Btf3OSuAc9": {
      color: "#f52e36",
      description:
        "1這堂課使用python turtle 模組來創造幾何畫作，課程使用繪圖指令來講述程式語言的重要觀念，讓你打好程式語言的基礎。",
      img: "https://bulma.io/images/placeholders/1280x960.png",
      introduction: "1課程介紹課程介紹課程介紹",
      name: "1進入 python 的魔法世界 - 第一次學程式入門課",
      order: 3
    },
    "-M7Ceyp-S3Btf3OSuAc92": {
      color: "#f52e36",
      description:
        "2這堂課使用python turtle 模組來創造幾何畫作，課程使用繪圖指令來講述程式語言的重要觀念，讓你打好程式語言的基礎。",
      img: "https://bulma.io/images/placeholders/1280x960.png",
      introduction: "2課程介紹課程介紹課程介紹",
      name: "2進入 python 的魔法世界 - 第一次學程式入門課",
      order: 5
    },
    "-M7CgU5r4tKOoVQXjT4c": {
      color: "#f52e36",
      description:
        "3這堂課使用python turtle 模組來創造幾何畫作，課程使用繪圖指令來講述程式語言的重要觀念，讓你打好程式語言的基礎。",
      img: "https://bulma.io/images/placeholders/1280x960.png",
      introduction: "1課程介紹課程介紹課程介紹",
      name: "3進入 python 的魔法世界 - 第一次學程式入門課",
      order: 1
    }
  });
});

//取得課程內容
app.get(API.getCoursesItem.url, async (req, res, next) => {
  await sleep(0);
  res.status(200);
  res.json({
    item: [
      {
        info: "即時資訊1",
        name: "課程名稱1",
        youtube_id: "09R8_2nJtjg"
      },
      {
        info: "即時資訊3",
        name: "課程名稱2",
        youtube_id: "LNxWTS25Tbk"
      },
      {
        info: "即時資訊3",
        name: "課程名稱3",
        youtube_id: "09R8_2nJtjg"
      },
      {
        info: "即時資訊4",
        name: "課程名稱4",
        youtube_id: "LNxWTS25Tbk"
      }
    ]
  });
});

// 新增 /編輯會員資料
app.patch(API.patchMemberInfo.url, async (req, res, next) => {
  await sleep(0);
  res.status(200);
  console.log(req.body, "patchMemberInfo");
  res.json({
    name: "王小明",
    email: "wayne1894.teach@gmail.com",
    picture: "https://bulma.io/images/placeholders/128x128.png"
  });
});
app.get(API.getMemberInfo.url, async (req, res, next) => {
  await sleep(0);
  res.status(200);
  console.log(req.params, "getMemberInfo");
  res.json({
    name: "王小明",
    email: "wayne1894.teach@gmail.com",
    picture: "https://bulma.io/images/placeholders/128x128.png",
    favorite: {
      "-M7CgU5r4tKOoVQXjT4c": true
    }
  });
});

module.exports = app;
