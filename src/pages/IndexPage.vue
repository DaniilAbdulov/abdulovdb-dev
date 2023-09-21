<template>
  <div>Hello</div>
  <h1>GitHub</h1>
  <div>{{ user }}</div>
  <p>Info about Repos</p>
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
    }),
    ...mapState("leet_code", {
      leetCodeData: (state) => state.leetCodeData,
    }),
    ...mapState("code_wars", {
      codeWarsData: (state) => state.codeWarsData,
    }),
  },
  methods: {
    ...mapActions("git_hub_repos", ["getInfoAboutUser", "getInfoAboutRepos"]),
    ...mapActions("leet_code", ["getInfoFromleetCode"]),
    ...mapActions("code_wars", ["getInfoFromCodeWars"]),
  },
  mounted() {
    this.getInfoAboutUser();
    this.getInfoAboutRepos();
    this.getInfoFromleetCode();
    this.getInfoFromCodeWars();
  },
});
</script>
