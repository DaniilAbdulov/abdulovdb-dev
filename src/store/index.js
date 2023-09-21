import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import git_hub_repos from "./git_hub_repos";
import leet_code from "./leet_code";
import code_wars from "./code_wars";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      git_hub_repos,
      leet_code,
      code_wars,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
