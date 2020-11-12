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
  counter: 0
});

export const actions = {
  delayIncrease({ commit }, num) {
    setTimeout(() => {
      commit("increase", num);
    }, 2000);
  }
};

export const mutations = {
  increase(state, num) {
    console.dir(this.$axios);
    state.counter += num;
  },
  decrease(state, num) {
    state.counter -= num;
  }
};

export const getters = {
  filterCounter(state) {
    return state.counter + 20;
  }
};
