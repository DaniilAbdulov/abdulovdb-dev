import { Octokit } from "@octokit/core";
// console.log(process.env.VUE_APP_GITHUB_PERSONAL_ACCESS_TOKEN);

const octokit = new Octokit({
  auth: process.env.VUE_APP_GITHUB_PERSONAL_ACCESS_TOKEN,
});
const state = {
  user: {},
  reposInfo: [],
  starred_repos: {},
  user_languages: [],
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
  set_all_languages(state, data) {
    state.user_languages = data;
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
      const languagesList = await Promise.all(
        infoAboutRepos.map(async (repo) => {
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
        })
      );

      const languagesMap = new Map();
      const shortDataAboutRepos = infoAboutRepos.map((repo, index) => {
        const languages = languagesList[index];
        const totalVal = Object.values(languages).reduce((a, b) => a + b, 0);

        const languagesArr = [];
        for (const lang in languages) {
          const val = languages[lang] / totalVal;
          const percentage = (val * 100).toFixed(2) + " %";

          languagesArr.push({ language: lang, percentage });

          if (languagesMap.has(lang)) {
            languagesMap.set(lang, languagesMap.get(lang) + val);
          } else {
            languagesMap.set(lang, val);
          }
        }

        const {
          created_at,
          homepage,
          html_url,
          id,
          name,
          updated_at,
          description,
        } = repo;

        const shortData = {
          created_at,
          homepage,
          html_url,
          id,
          name,
          updated_at,
          description,
        };

        return {
          shortData,
          languagesData: languagesArr,
        };
      });

      const getDataAboutFavoriteLanguages = () => {
        const totalCount = Array.from(languagesMap.values()).reduce(
          (a, b) => a + b,
          0
        );
        const resultArray = [];

        for (const [lang, val] of languagesMap.entries()) {
          const percentage = +(val / totalCount).toFixed(3);
          resultArray.push([lang, percentage]);
        }
        return resultArray;
      };

      const listOfAllLanguages = getDataAboutFavoriteLanguages();
      commit("set_all_languages", listOfAllLanguages);
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
            html_url,
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
            html_url,
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
