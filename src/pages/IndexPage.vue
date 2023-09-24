<template>
  <div class="git">
    <h1>GitHub</h1>
    <div class="fit row wrap justify-start items-start content-start">
      <div class="" style="overflow: auto; min-height: auto; max-height: auto">
        <GitHubUserInfo />
      </div>
      <div class="col-grow self-stretch" style="padding: 0px 15px">
        <GitHubStarredRepos />
      </div>
    </div>
    <div class="git__body">
      <ListOfRepos :reposInfo="reposInfo" />
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
import ListOfRepos from "src/components/ListOfRepos.vue";
import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "IndexPage",
  components: {
    GitHubUserInfo,
    GitHubStarredRepos,
    ListOfRepos,
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
