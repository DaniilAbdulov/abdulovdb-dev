<template>
  <div class="lnc">
    <LeetCode :leetCodeData="leetCodeData" />

    <CodeWars :codeWarsData="codeWarsData" />
  </div>
  <q-card class="git">
    <h2 style="margin: 0px 0px 10px 0px">GitHub</h2>
    <div
      class="fit row wrap justify-center items-start content-start"
      style="margin-bottom: 10px; padding: 0px 10px; gap: 5px"
    >
      <div class="" style="overflow: auto; min-height: auto; max-height: auto">
        <GitHubUserInfo />
      </div>
      <div class="col-grow self-stretch">
        <GitHubStarredRepos />
      </div>
    </div>
    <q-card class="git__body" style="height: 700px; overflow: auto">
      <ListOfRepos :reposInfo="reposInfo" />
    </q-card>
  </q-card>
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
<style>
.git__body {
  scrollbar-width: 1px;
}
.lnc {
  display: flex;
}
</style>
