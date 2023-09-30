<template>
  <div class="my-card">
    <q-card>
      <q-item-label class="text-h3" style="padding-left: 10px">
        About me
      </q-item-label>
      <q-card v-for="index in paragraphs" :key="index" style="padding: 10px">
        <div>
          <q-card-section style="padding: 0px; text-indent: 10px">
            {{ index }}
          </q-card-section>
        </div>
      </q-card>
    </q-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AboutMe",
  computed: {
    ...mapState("paragraphs", {
      paragraphs: (state) => state.paragraphs,
    }),
  },
};
</script>

<style>
.my-card {
  width: 100%;
  margin-bottom: 20px;
}
</style>
