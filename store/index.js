// export const state = () => ({
//   test_data: {
//     aaa: 1,
//     bbb: "string"
//   }
// });

// export const getters = {
//   get_aaa: state => {
//     return state.test_data.aaa;
//   },
//   get_aaabbb: state => {
//     return state.test_data.aaa + state.test_data.bbb;
//   }
// };

// export const mutations = {
//   add_test_data: (state, payload) => {
//     state.test_data.title = payload.title;
//     state.test_data.aaa++;
//   }
// };

// export const actions = {};

// export const state = () => ({
//   counter: 0
// });

export const state = () => ({
  counter: 0,
  data: {},
  courses: []
});

export const actions = {
  delayIncrease({ commit }, num) {
    setTimeout(() => {
      commit("increase", num);
    }, 2000);
  },
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
  increase(state, num) {
    state.counter += num;
  },
  decrease(state, num) {
    state.counter -= num;
  },
  setData(state, data) {
    state.data = data;
  },
  set_courses: (state, payload) => {
    state.courses = payload.courses;
  }
};

export const getters = {
  filterCounter(state) {
    return state.counter + 20;
  }
};
