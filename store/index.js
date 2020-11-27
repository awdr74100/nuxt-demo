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
  }
};

export const getters = {};
