const state = {
  leetCodeData: {},
};
const mutations = {
  set_leetCode_data(state, data) {
    state.leetCodeData = data;
  },
};
const actions = {
  async getInfoFromleetCode({ commit }) {
    try {
      const response = await fetch(
        "https://leetcodestats.cyclic.app/daniilabdulov"
      );
      const data = await response.json();
      commit("set_leetCode_data", data);
    } catch (error) {
      console.log(error);
    }
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
