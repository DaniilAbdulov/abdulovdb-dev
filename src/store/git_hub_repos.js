import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: "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",
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
