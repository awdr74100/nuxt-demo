import jwtDecode from "jwt-decode";
import Cookie from "js-cookie";
import API from "~/api.js";

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
  },
  async setCoursesList({ commit }) {
    const method = API.getCoursesList.method;
    const url = API.getCoursesList.url;
    try {
      const { data } = await this.$axios[method](url);
      const courses = Object.keys(data)
        .reduce((arr, cur) => [...arr, { ...data[cur], id: cur }], [])
        .sort((a, b) => (a.order > b.order ? 1 : -1));
      commit("set_courses", { courses });
    } catch (error) {
      console.log(error.response, "error");
      console.log("TO DO error");
    }
  },
  nuxtServerInit({ commit }, context) {
    // console.log("nuxtServerInit Active", new Date().getTime());
    //這邊是給 Oauth 回來時提早觸發
    if (context.query.id_token && context.query.refresh_token) {
      const id_token_Decode = jwtDecode(context.query.id_token);
      commit("setUserLoggedIn", {
        id_token: context.query.id_token,
        refresh_token: context.query.refresh_token,
        userUid: id_token_Decode.user_id,
        userPicture: id_token_Decode.picture,
        userName: id_token_Decode.name
      });
      context.app.$cookies.set("id_token", context.query.id_token);
      context.app.$cookies.set("refresh_token", context.query.refresh_token);
      context.app.$cookies.set("userUid", id_token_Decode.user_id);
      context.app.$cookies.set("userPicture", id_token_Decode.picture);
      context.app.$cookies.set("userName", id_token_Decode.name);
      return;
    }
    if (context.app.$cookies.get("id_token")) {
      let picture = context.app.$cookies.get("userPicture");
      let name = context.app.$cookies.get("userName");
      let uid = context.app.$cookies.get("userUid");
      commit("setUserLoggedIn", {
        userPicture: picture,
        userName: name,
        userUid: uid
      });
      //nuxtServerInit 取得 cookie的方式和前端不同
    }
  }
};

export const mutations = {
  setData(state, data) {
    state.data = data;
  },
  set_courses(state, payload) {
    state.courses = payload.courses;
  },
  setUserLoggedIn(state, payload) {
    state.isUserLoggedIn = true;
    state.userPicture =
      payload.userPicture || "https://bulma.io/images/placeholders/128x128.png";
    state.userName = payload.userName;
    state.userUid = payload.userUid;
    if (process.client) {
      Cookie.set("id_token", payload.id_token);
      Cookie.set("refresh_token", payload.refresh_token);
      Cookie.set("userUid", state.userUid);
      Cookie.set("userPicture", state.userPicture);
      Cookie.set("userName", state.userName);
    }
  },
  setUserlogout(state, payload) {
    state.isUserLoggedIn = false;
    state.userPicture = "";
    state.userName = "";
    Cookie.remove("id_token");
    Cookie.remove("refresh_token");
    Cookie.remove("userUid");
    Cookie.remove("userPicture");
    Cookie.remove("userName");
    this.$router.push({ name: "index" });
    // $nuxt.$router.push({ name: "index" });
  }
};

export const getters = {};
