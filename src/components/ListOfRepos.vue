<template>
  <div class="q-pa-sm" style="position: relative">
    <q-item-label
      class="text-h4 list-of-repos"
      style="text-align: center; margin-bottom: 20px; margin-top: 0px"
    >
      List of repositories
    </q-item-label>
    <q-scroll-area
      v-if="infoAboutReposIsLoading"
      style="height: 700px; width: 100%"
    >
      <q-card
        v-for="(repo, index) in reposInfo"
        :key="repo.id"
        class="example-item"
        style="margin-bottom: 10px"
      >
        <q-card-section>
          <div class="text-h4 text-blue-9">{{ repo.shortData.name }}</div>
          <div class="text-h6 text-black">
            {{ repo.shortData.description }}
          </div>

          <div v-for="lang in repo.languagesData" :key="lang.language">
            <div class="text-body2 text-grey">
              {{ lang.language }} : {{ lang.percentage }}
            </div>
          </div>
          <a
            class="text-subtitle1 text-black"
            :href="repo.shortData.homepage"
            target="_blank"
            >{{ repo.shortData.homepage }}</a
          >
          <q-card-actions>
            <q-btn
              flat
              color="dark"
              label="Watch full code"
              :href="repo.shortData.html_url"
              target="_blank"
            />

            <q-space />

            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="
                expandedStates[index]
                  ? 'keyboard_arrow_up'
                  : 'keyboard_arrow_down'
              "
              @click="toggleExpanded(index)"
            />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="expandedStates[index]">
              <q-separator />
              <q-card-section class="text-body2">
                <div class="q-m-xs">
                  Created: {{ repo.shortData.formattedCreatedAt }}
                </div>
                <div class="q-m-xs">
                  Last update: {{ repo.shortData.formattedUpdatedAt }}
                </div>
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card-section>
      </q-card>
    </q-scroll-area>
    <div class="flex justify-center" v-else><SpinnerLoad /></div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import SpinnerLoad from "src/components/SpinnerLoad.vue";
export default {
  props: {
    reposInfo: {
      type: Array,
      required: true,
    },
    infoAboutReposIsLoading: {
      type: Boolean,
    },
  },
  components: {
    SpinnerLoad,
  },
  name: "ListOfRepos",
  setup(props) {
    const expandedStates = ref([]);

    const initializeExpandStates = () => {
      if (Array.isArray(props.reposInfo)) {
        expandedStates.value = props.reposInfo.map(() => false);
      } else {
        expandedStates.value = [];
      }
    };

    onMounted(() => {
      initializeExpandStates();
    });

    watch(
      () => props.reposInfo,
      () => {
        initializeExpandStates();
      }
    );

    function toggleExpanded(index) {
      expandedStates.value[index] = !expandedStates.value[index];
    }

    return {
      expandedStates,
      toggleExpanded,
    };
  },
};
</script>
<style lang="scss" scoped>
.example-item {
  margin: 10px;
}
.list-of-repos {
  position: sticky;
  background: white;
  top: 0px;
  left: 0px;
  padding: 10px 0px;
  z-index: 1;
}
@media (max-width: 490px) {
  .text-h6 {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .text-subtitle1 {
    font-size: 0.8rem;
    line-height: 1.5rem;
  }
}
</style>
