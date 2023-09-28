<template>
  <q-card
    class="fit row wrap items-start content-start"
    style="margin-bottom: 20px; gap: 10px; padding: 10px"
  >
    <div class="col-grow">
      <LeetCode :leetCodeData="leetCodeData" />
    </div>
    <div class="col-grow">
      <CodeWars :codeWarsData="codeWarsData" />
    </div>
  </q-card>
  <h2 style="margin: 0px 0px 10px 0px">GitHub</h2>
  <q-card class="git">
    <div
      class="fit row wrap justify-center items-start content-start"
      style="
        margin-bottom: 10px;
        padding: 20px 10px;
        gap: 5px;
        border-bottom: 1px solid black;
      "
    >
      <div style="overflow: auto; min-height: auto; max-height: auto">
        <GitHubUserInfo />
      </div>
      <div class="col-grow self-stretch">
        <GitHubStarredRepos />
      </div>
    </div>
    <q-card style="height: 700px; overflow: auto">
      <ListOfRepos
        :reposInfo="reposInfo"
        :infoAboutReposIsLoading="infoAboutReposIsLoading"
      >
      </ListOfRepos>
    </q-card>
  </q-card>
  <q-page-scroller
    position="bottom-right"
    :scroll-offset="150"
    :offset="[18, 18]"
  >
    <q-btn fab icon="keyboard_arrow_up" color="primary" />
  </q-page-scroller>
</template>

<script>
import { defineComponent } from "vue";
import GitHubUserInfo from "components/GitHubUserInfo.vue";
import GitHubStarredRepos from "components/GitHubStarredRepos.vue";
import ListOfRepos from "src/components/ListOfRepos.vue";
import CodeWars from "src/components/CodeWars.vue";
import LeetCode from "src/components/LeetCode.vue";

import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "IndexPage",
  components: {
    GitHubUserInfo,
    GitHubStarredRepos,
    ListOfRepos,
    LeetCode,
    CodeWars,
  },
  computed: {
    ...mapState("git_hub_repos", {
      reposInfo: (state) => state.reposInfo,
      infoAboutReposIsLoading: (state) => state.infoAboutReposIsLoading,
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
<style></style>
