import jwtDecode from "jwt-decode";
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
  },
  nuxtServerInit({ commit }, context) {
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
      context.res.setHeader("Set-Cookie", [
        `id_token=${context.query.id_token}`,
        `refresh_token=${context.query.id_token}`,
        `userUid=${id_token_Decode.user_id}`,
        `userPicture=${id_token_Decode.picture}`,
        `userName=${escape(id_token_Decode.name)}`
      ]);
      return;
    }
    if (context.req.headers.cookie) {
      if (context.req.headers.cookie.indexOf("id_token=") > -1) {
        //nuxtServerInit 取得 cookie的方式和前端不同
        let picture = decodeURI(
          context.req.headers.cookie.split("userPicture=")[1].split(" ")[0]
        );
        let name = decodeURI(
          unescape(
            context.req.headers.cookie.split("userName=")[1].split(" ")[0]
          )
        );
        let uid = decodeURI(
          context.req.headers.cookie.split("userUid=")[1].split(" ")[0]
        );
        commit("setUserLoggedIn", {
          userPicture: picture,
          userName: name,
          userUid: uid
        });
      }
    }
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
    // Cookie.set("id_token", payload.id_token);
    // Cookie.set("refresh_token", payload.refresh_token);
    // Cookie.set("userUid", state.userUid);
    // Cookie.set("userPicture", state.userPicture);
    // Cookie.set("userName", state.userName);
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
