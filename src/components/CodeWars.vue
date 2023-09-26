<template>
  <h2 style="margin: 0px 0px 10px 0px">CodeWars</h2>
  <div
    class="codewars"
    v-if="
      codeWarsData &&
      codeWarsData.overall &&
      codeWarsData.languages &&
      codeWarsData.honor
    "
  >
    <div class="q-pa-md" style="max-width: 350px">
      <q-list bordered padding>
        <q-item-label header style="color: #ffffff">Progress:</q-item-label>

        <q-item>
          <q-item-section>
            <q-item-section style="color: #b0b0b0">Rank:</q-item-section>
          </q-item-section>
          <q-item-section
            :style="' color: ' + codeWarsData.overall.color + '; padding:2px;'"
            >{{ codeWarsData.overall.name }}</q-item-section
          >
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-section style="color: #b0b0b0">Honor:</q-item-section>
          </q-item-section>
          <q-item-section style="color: #ffffff">{{
            codeWarsData.honor
          }}</q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-section style="color: #b0b0b0"
              >Total completed:</q-item-section
            >
          </q-item-section>
          <q-item-section style="color: #ffffff">{{
            codeWarsData.totalCompleted
          }}</q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="codewars__image">
      <img
        src="https://uploads-ssl.webflow.com/62e95dddfb380a0e61193e7d/6363e7db70db732290fa3db6_logo-256.png"
        alt=""
      />
    </div>
    <div class="q-pa-md" style="max-width: 300px">
      <q-list bordered padding>
        <q-item-label header style="color: #ffffff">Languages:</q-item-label>
        <q-item v-for="(lang, index) in codeWarsData.languages" :key="index">
          <q-item-section>
            <q-item-section style="color: #b0b0b0">{{
              lang[0]
            }}</q-item-section>
          </q-item-section>
          <q-item-section :style="'color: ' + lang[1].color + ';'"
            >{{ lang[1].name }}
          </q-item-section>
          <q-item-section style="color: #ffffff"
            >/ Score: {{ lang[1].score }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
  <q-skeleton v-else height="227px" width="591px" square />
</template>

<script>
export default {
  name: "CodeWars",
  props: {
    codeWarsData: {
      honor: 0,
      totalCompleted: 0,
      overall: {
        type: Object,
        required: true,
      },
      languages: [],
    },
  },
};
</script>

<style lang="scss" scoped>
.codewars {
  // max-width: 70%;
  // margin: 0 auto;
  background: #222327;
  display: flex;
  // justify-content: space-between;
  align-items: flex-start;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 6px, rgba(0, 0, 0, 0.02) 0px 4px 8px,
    rgba(0, 0, 0, 0.02) 0px 6px 12px;
  padding: 10px;
  &__overal {
  }
  &__languages {
  }
  &__image {
    padding: 16px 0px;
    max-width: 100px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
}

.q-item__section--main {
  flex: 0 1 auto;
}
.q-item {
  margin-bottom: -15px;
}
.q-item__label--header {
  margin-bottom: -15px;
}
</style>
