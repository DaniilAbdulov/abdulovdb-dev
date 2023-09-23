import { Octokit } from "@octokit/core";

console.log(process.env.VUE_APP_GITHUB_PERSONAL_ACCESS_TOKEN);

const octokit = new Octokit({
  auth: process.env.VUE_APP_GITHUB_PERSONAL_ACCESS_TOKEN,
});
const state = {
  user: {},
  reposInfo: {},
};
const mutations = {
  set_user_info(state, data) {
    state.user = data;
  },
  set_repos_info(state, data) {
    state.reposInfo = data;
  },
};
const actions = {
  async getInfoAboutUser({ commit }) {
    try {
      const response = await octokit.request("GET /user", {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      commit("set_user_info", response);
    } catch (error) {
      console.log(error);
    }
  },
  async getInfoAboutRepos({ commit }) {
    try {
      const response = await octokit.request("GET /user/repos", {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      commit("set_repos_info", response);
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
