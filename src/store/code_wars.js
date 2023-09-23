const state = {
  codeWarsData: {},
};
const mutations = {
  set_codeWars_data(state, data) {
    state.codeWarsData = data;
  },
};
const actions = {
  async getInfoFromCodeWars({ commit }) {
    try {
      const response = await fetch(
        "https://www.codewars.com/api/v1/users/abdulovdb"
      );
      const data = await response.json();
      commit("set_codeWars_data", data);
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
