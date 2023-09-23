<template>
  <div>Hello</div>
  <h1>GitHub</h1>
  <div>{{ user }}</div>
  <h2>StarredRepos</h2>
  <div>{{ starred_repos }}</div>
  <h3>Info about Repos</h3>
  <div>{{ reposInfo }}</div>
  <h2>LeetCode</h2>
  <div>{{ leetCodeData }}</div>
  <h3>Codewars</h3>
  <div>{{ codeWarsData }}</div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "IndexPage",
  computed: {
    ...mapState("git_hub_repos", {
      user: (state) => state.user,
      reposInfo: (state) => state.reposInfo,
      starred_repos: (state) => state.starred_repos,
    }),
    ...mapState("leet_code", {
      leetCodeData: (state) => state.leetCodeData,
    }),
    ...mapState("code_wars", {
      codeWarsData: (state) => state.codeWarsData,
    }),
  },
  methods: {
    ...mapActions("git_hub_repos", [
      "getInfoAboutUser",
      "getInfoAboutRepos",
      "getStarredReposReadmes",
    ]),
    ...mapActions("leet_code", ["getInfoFromleetCode"]),
    ...mapActions("code_wars", ["getInfoFromCodeWars"]),
  },
  mounted() {
    this.getInfoAboutUser();
    this.getInfoAboutRepos();
    this.getStarredReposReadmes();
    this.getInfoFromleetCode();
    this.getInfoFromCodeWars();
  },
});
</script>
