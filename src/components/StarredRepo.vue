<template>
  <div class="q-pa-sm row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-card-section>
        <div class="text-h4 text-green-9">{{ repo.name }}</div>
        <div class="text-h6 text-black">
          {{ repo.description }}
        </div>
        <div class="text-body2 text-grey">
          {{ repo.readme.content }}
        </div>
        <a
          class="text-subtitle1 text-black"
          :href="repo.homepage"
          target="_blank"
        >
          {{ repo.homepage }}
        </a>
      </q-card-section>

      <q-card-actions>
        <q-btn
          flat
          color="dark"
          label="Watch full code"
          :href="repo.html_url"
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
          <q-card-section class="text-body2 text-black">
            <div class="q-m-xs">Created: {{ repo.formattedCreatedAt }}</div>
            <div class="q-m-xs">Last update: {{ repo.formattedUpdatedAt }}</div>
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    repo: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {
      expanded: ref(false),
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 350px;
  margin-bottom: 20px;
}
@media (max-width: 490px) {
  .my-card {
    width: 300px;
    margin-bottom: 15px;
  }
}
@media (max-width: 430px) {
  .my-card {
    width: 250px;
    margin-bottom: 10px;
  }
}
</style>
