import { Octokit } from "@octokit/core";
console.log(process.env.VUE_APP_GITHUB_PERSONAL_ACCESS_TOKEN);

const octokit = new Octokit({
  auth: process.env.VUE_APP_GITHUB_PERSONAL_ACCESS_TOKEN,
});
const state = {
  user: {},
  reposInfo: {},
  starred_repos: {},
};
const mutations = {
  set_user_info(state, data) {
    state.user = data;
  },
  set_repos_info(state, data) {
    state.reposInfo = data;
  },
  set_starred_repos(state, data) {
    state.starred_repos = data;
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
      const { name, email, avatar_url, bio, location, created_at, updated_at } =
        response.data;
      const data = {
        name,
        email,
        avatar_url,
        bio,
        location,
        created_at,
        updated_at,
      };
      commit("set_user_info", data);
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
      const infoAboutRepos = response.data;
      const languagesPromises = infoAboutRepos.map(async (repo) => {
        try {
          const languagesResponse = await octokit.request(
            "GET /repos/{owner}/{repo}/languages",
            {
              owner: repo.owner.login,
              repo: repo.name,
              headers: {
                "X-GitHub-Api-Version": "2022-11-28",
              },
            }
          );
          return languagesResponse.data;
        } catch (error) {
          console.log(error);
          return null;
        }
      });
      const languagesList = await Promise.all(languagesPromises);
      const fullInfoAboutRepos = infoAboutRepos.map((repo, index) => ({
        ...repo,
        languages: languagesList[index],
      }));
      const shortDataAboutRepos = fullInfoAboutRepos.map((repo) => {
        function changeValuesOfLanguages(val) {
          const sumOfValues = Object.values(val).reduce((a, b) => a + b, 0);
          const arr = Object.entries(val);
          const newArr = [];
          for (let i of arr) {
            newArr.push([i[0], ((i[1] / sumOfValues) * 100).toFixed(2) + " %"]);
          }
          return Object.fromEntries(newArr);
        }
        const languagesData = changeValuesOfLanguages(repo.languages);
        const {
          created_at,
          description,
          name,
          updated_at,
          html_url,
          homepage,
        } = repo;

        return {
          created_at,
          description,
          name,
          updated_at,
          html_url,
          homepage,
          languagesData,
        };
      });
      commit("set_repos_info", shortDataAboutRepos);
    } catch (error) {
      console.log(error);
    }
  },
  async getStarredReposReadmes({ commit }) {
    try {
      const response = await octokit.request("GET /user/starred", {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      const starredRepos = response.data;

      const readmePromises = starredRepos.map(async (repo) => {
        try {
          const readmeResponse = await octokit.request(
            "GET /repos/{owner}/{repo}/readme",
            {
              owner: repo.owner.login,
              repo: repo.name,
              headers: {
                "X-GitHub-Api-Version": "2022-11-28",
              },
            }
          );
          return readmeResponse.data;
        } catch (error) {
          console.error(
            `Error fetching readme for ${repo.owner.login}/${repo.name}:`,
            error
          );
          return null;
        }
      });

      const readmes = await Promise.all(readmePromises);

      const starredReposWithReadmes = starredRepos.map((repo, index) => ({
        ...repo,
        readme: readmes[index],
      }));
      const filteredStarredReposWithReadmes = starredReposWithReadmes.map(
        (repo) => {
          const {
            created_at,
            description,
            name,
            readme,
            updated_at,
            homepage,
          } = repo;
          return {
            name,
            readme: {
              content: atob(readme.content),
            },
            created_at,
            updated_at,
            description,
            homepage,
          };
        }
      );
      commit("set_starred_repos", filteredStarredReposWithReadmes);
      return filteredStarredReposWithReadmes;
    } catch (error) {
      console.error("Error fetching starred repos:", error);
    }
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
