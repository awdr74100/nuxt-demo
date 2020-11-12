export const state = () => ({
  isSignin: false
});

export const getters = {
  reverse(state) {
    return !state.isSignin;
  }
};
