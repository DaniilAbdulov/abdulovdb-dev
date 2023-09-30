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

      commit("set_codeWars_data", codeWarsObject);
    } catch (error) {
      console.log(error);
      Notify.create({
        message: "Error fetching codewars statistic",
        color: "negative",
        actions: [
          {
            label: "Reload",
            color: "white",
            handler: () => {
              location.reload();
            },
          },
        ],
      });
    }
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
