const path = require("path");

export default [
  {
    name: "index",
    path: "/",
    component: path.resolve(__dirname, "pages/index.vue")
  },
  {
    name: "hello",
    path: "/a",
    component: path.resolve(__dirname, "pages/demo/tpl.vue")
  }
];
