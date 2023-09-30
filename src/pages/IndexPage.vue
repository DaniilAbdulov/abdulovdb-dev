<template>
  <!-- :style="'min-height:' + setMinHeight(hAboutMe, screenWidth) + 'px;'" -->
  <q-intersection
    transition="slide-left"
    transition-duration="800"
    class="about-me-for-animation"
  >
    <AboutMe />
  </q-intersection>
  <!-- :style="'min-height:' + setMinHeight(hLeetWarsInfo, screenWidth) + 'px;'" -->
  <q-intersection
    transition="slide-right"
    transition-duration="800"
    class="leet-wars-info-for-animation"
  >
    <q-item style="justify-content: center">
      <q-item-label class="text-h5 q-mb-sm q-pa-xs text-center">
        You can now track my progress in LeetCode and CodeWars.
        <div class="text-body1 text-center">
          In my opinion, these are the best platforms for practicing programming
          skills. Data is displayed via API.
        </div>
      </q-item-label>
    </q-item>
  </q-intersection>
  <!-- :style="'min-height:' + setMinHeight(hLeetWars, screenWidth) + 'px;'" -->
  <q-intersection
    transition="slide-left"
    transition-duration="800"
    class="leet-wars-for-animation"
  >
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
  </q-intersection>
  <!-- :style="'min-height:' + setMinHeight(hGitHubInfo, screenWidth) + 'px;'" -->
  <q-intersection
    transition="slide-right"
    transition-duration="800"
    class="git-hub-info-for-animation"
  >
    <div>
      <q-item>
        <q-item-label class="text-h5 q-mb-sm q-pa-xs text-center">
          You can also track my progress on GitHub.
          <div
            class="text-body1 text-center"
            v-for="(text, index) in IndexPageBlocksDescriptions"
            :key="index"
            :style="{
              'font-weight': [0, 2, 4].includes(index) ? 'bold' : 'normal',
            }"
          >
            {{ text }}
          </div>
        </q-item-label>
      </q-item>
    </div>
  </q-intersection>
  <q-card class="git">
    <q-item-label class="text-h3">GitHub</q-item-label>
    <div
      class="fit row wrap justify-center items-start content-start"
      style="padding: 20px 10px; gap: 5px"
    >
      <div style="overflow: auto; min-height: auto; max-height: auto">
        <GitHubUserInfo />
      </div>
      <div class="col-grow self-stretch">
        <GitHubStarredRepos />
      </div>
    </div>
    <q-card>
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
    <q-btn fab icon="keyboard_arrow_up" color="dark" />
  </q-page-scroller>
</template>

<script>
import { defineComponent } from "vue";
import GitHubUserInfo from "components/GitHubUserInfo.vue";
import GitHubStarredRepos from "components/GitHubStarredRepos.vue";
import ListOfRepos from "src/components/ListOfRepos.vue";
import CodeWars from "src/components/CodeWars.vue";
import LeetCode from "src/components/LeetCode.vue";
import AboutMe from "src/components/AboutMe.vue";

import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      IndexPageBlocksDescriptions: [
        `"About Me Section": `,
        `In this section, you'll find a brief overview from my GitHub profile. The "About Me" block showcases my background, skills, and provides details about when I registered my profile and when it was last updated.`,
        `"Favorite Repositories Section":`,
        ` This section dynamically displays repositories I've starred on github.com. Each card includes the repository name, description, content from the README file, various timestamps, and, if available, a link to the project's homepage.`,
        `"Repository List Section": `,
        `Here, you'll find a comprehensive list of all my repositories. Information includes the name, description, programming languages used, a link to the website (if applicable), and timestamps.`,
      ],
    };
  },
  components: {
    GitHubUserInfo,
    GitHubStarredRepos,
    ListOfRepos,
    LeetCode,
    CodeWars,
    AboutMe,
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
  beforeUnmount() {
    window.removeEventListener("resize", this.updateScreenWidth);
  },
  mounted() {
    this.getInfoAboutRepos();
    this.getInfoFromleetCode();
    this.getInfoFromCodeWars();
  },
});
</script>
<style>
@media (min-width: 1027px) {
  .about-me-for-animation {
    min-height: 388px;
  }
  .leet-wars-info-for-animation {
    min-height: 85px;
  }
  .leet-wars-for-animation {
    min-height: 300px;
  }
  .git-hub-info-for-animation {
    min-height: 277px;
  }
}
@media (max-width: 1026px) {
  .about-me-for-animation {
    min-height: 410px;
  }
}
@media (max-width: 769px) {
  .about-me-for-animation {
    min-height: 515px;
  }
  .leet-wars-info-for-animation {
    min-height: 109px;
  }
  .leet-wars-for-animation {
    min-height: 587px;
  }
  .git-hub-info-for-animation {
    min-height: 349px;
  }
}
@media (max-width: 426px) {
  .about-me-for-animation {
    min-height: 725px;
  }
  .leet-wars-info-for-animation {
    min-height: 162px;
  }
  .leet-wars-for-animation {
    min-height: 744px;
  }
  .git-hub-info-for-animation {
    min-height: 502px;
  }
}
@media (max-width: 376px) {
  .about-me-for-animation {
    min-height: 788px;
  }
  .leet-wars-info-for-animation {
    min-height: 190px;
  }
  .leet-wars-for-animation {
    min-height: 895px;
  }
  .git-hub-info-for-animation {
    min-height: 570px;
  }
}
@media (max-width: 321px) {
  .about-me-for-animation {
    min-height: 956px;
  }
  .leet-wars-info-for-animation {
    min-height: 215px;
  }
  .leet-wars-for-animation {
    min-height: 895px;
  }
  .git-hub-info-for-animation {
    min-height: 690px;
  }
}
.about-me-for-animation {
}
.leet-wars-info-for-animation {
}
.leet-wars-for-animation {
}
.git-hub-info-for-animation {
}
</style>
