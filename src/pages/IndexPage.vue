<template>
  <div class="git">
    <div class="git__general">
      <GitHubUserInfo />
      <GitHubStarredRepos />
    </div>
    <div class="git__body">
      <h3>Info about Repos</h3>
      <div>{{ reposInfo }}</div>
    </div>
  </div>
  <h2>LeetCode</h2>
  <div>{{ leetCodeData }}</div>
  <h3>Codewars</h3>
  <div>{{ codeWarsData }}</div>
</template>

<script>
import { defineComponent } from "vue";
import GitHubUserInfo from "components/GitHubUserInfo.vue";
import GitHubStarredRepos from "components/GitHubStarredRepos.vue";
import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "IndexPage",
  components: {
    GitHubUserInfo,
    GitHubStarredRepos,
  },
  computed: {
    ...mapState("git_hub_repos", {
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
    ...mapActions("git_hub_repos", ["getInfoAboutRepos"]),
    ...mapActions("leet_code", ["getInfoFromleetCode"]),
    ...mapActions("code_wars", ["getInfoFromCodeWars"]),
  },
  mounted() {
    this.getInfoAboutRepos();
    this.getInfoFromleetCode();
    this.getInfoFromCodeWars();
  },
});
</script>
