<template>
  <div>
    <h4 style="text-align: center; margin-bottom: 20px; margin-top: 0px">
      My favorite repositories
    </h4>
    <div class="q-gutter-md">
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
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide
          v-for="repo in starred_repos"
          :key="repo.id"
          :name="repo.name"
          class="column no-wrap flex-center"
        >
          <StarredRepo :repo="repo" />
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
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
