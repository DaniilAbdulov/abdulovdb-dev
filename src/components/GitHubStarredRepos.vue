<template>
  <q-card flat style="height: 100%">
    <q-item-label
      class="text-h4"
      style="text-align: center; margin-bottom: 30px; margin-top: 0px"
    >
      My favorite repositories
    </q-item-label>
    <div class="q-gutter-lg" v-if="starred_repos.length > 0">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="100%"
        class="bg-dark text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide
          v-for="repo in starred_repos"
          :key="repo.id"
          :name="repo.name"
          class="column no-wrap flex-center"
          style="padding-bottom: 47px"
        >
          <StarredRepo :repo="repo" />
        </q-carousel-slide>
      </q-carousel>
    </div>
    <q-skeleton height="85%" width="100%" square v-else />
  </q-card>
</template>

<script>
import { ref } from "vue";
import { mapState, mapActions } from "vuex";
import StarredRepo from "./StarredRepo.vue";
export default {
  name: "GitHubStarredRepos",
  components: {
    StarredRepo,
  },
  computed: {
    ...mapState("git_hub_repos", {
      starred_repos: (state) => state.starred_repos,
    }),
  },
  methods: {
    ...mapActions("git_hub_repos", ["getStarredReposReadmes"]),
  },
  mounted() {
    this.getStarredReposReadmes();
  },
  setup() {
    const firstRepo = ref("Little-social-network");
    return {
      slide: firstRepo,
    };
  },
};
</script>
