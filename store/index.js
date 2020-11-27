import Cookie from "js-cookie";

export const state = () => ({
  data: {},
  courses: [],
  isUserLoggedIn: false, //是否登入
  userPicture: "", //會員照片
  userName: "", //會員名稱
  userUid: "" //會員 firebase 的 uid
});

export const actions = {
  async getData({ commit }) {
    const { data } = await this.$axios.get("/api/test");
    commit("setData", data);
  },
  async getCourses({ commit }) {
    const { data } = await this.$axios.get("/api/courses");
    commit("set_courses", data);
  }
};

export const mutations = {
  setData(state, data) {
    state.data = data;
  },
  set_courses: (state, payload) => {
    state.courses = payload.courses;
  },
  setUserLoggedIn: (state, payload) => {
    state.isUserLoggedIn = true;
    state.userPicture =
      payload.userPicture || "https://bulma.io/images/placeholders/128x128.png";
    state.userName = payload.userName;
    state.userUid = payload.userUid;
    Cookie.set("id_token", payload.id_token);
    Cookie.set("refresh_token", payload.refresh_token);
    Cookie.set("userUid", state.userUid);
    Cookie.set("userPicture", state.userPicture);
    Cookie.set("userName", state.userName);
  },
  setUserlogout: (state, payload) => {
    state.isUserLoggedIn = false;
    state.userPicture = "";
    state.userName = "";
    Cookie.remove("id_token");
    Cookie.remove("refresh_token");
    Cookie.remove("userUid");
    Cookie.remove("userPicture");
    Cookie.remove("userName");
    $nuxt.$router.push({ name: "index" });
  }
};

export const getters = {};
