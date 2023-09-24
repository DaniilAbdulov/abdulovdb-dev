<template>
  <div class="q-pa-md">
    <div class="row justify-center q-gutter-sm">
      <q-intersection
        v-for="repo in reposInfo"
        :key="repo.id"
        once
        transition="scale"
        class="example-item"
      >
        <q-card flat bordered class="q-ma-sm">
          <q-card-section>
            <div class="text-h4 text-green-9">{{ repo.shortData.name }}</div>
            <div class="text-h6 text-black">
              {{ repo.shortData.description }}
            </div>
            <a
              class="text-subtitle1 text-black"
              :href="repo.shortData.homepage"
              >{{ repo.shortData.homepage }}</a
            >
            <div
              class="text-h6"
              v-for="lang in repo.languagesData"
              :key="lang.language"
            >
              {{ lang.language }} : {{ lang.percentage }}
            </div>
            <q-card-actions>
              <q-btn
                flat
                color="primary"
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
                :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expanded = !expanded"
              />
            </q-card-actions>

            <q-slide-transition>
              <div v-show="expanded">
                <q-separator />
                <q-card-section class="text-subtitle2 text-black">
                  <p>Created: {{ repo.shortData.created_at }}</p>
                  <p>Last update: {{ repo.shortData.updated_at }}</p>
                </q-card-section>
              </div>
            </q-slide-transition>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    reposInfo: {
      type: Object,
      required: true,
    },
  },
  name: "ListOfRepos",
  setup() {
    return {
      expanded: ref(false),
    };
  },
};
</script>
<style lang="scss" scoped>
.example-item {
  display: flex;
}
</style>
