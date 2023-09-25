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
      const { honor, codeChallenges, ranks } = data;
      const { totalCompleted } = codeChallenges;
      const { overall, languages } = ranks;

      const codeWarsObject = {
        honor,
        totalCompleted,
        overall,
        languages: Object.entries(languages).map(([key, value]) => [
          key,
          value,
        ]),
      };

      console.log(codeWarsObject);
      commit("set_codeWars_data", codeWarsObject);
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
