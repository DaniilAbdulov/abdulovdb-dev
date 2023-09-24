<template>
  <div class="q-pa-md">
    <label class="text-h6">Stack</label>
    <div v-for="(langData, index) in user_languages" :key="index">
      <label>{{ langData[0] }}</label>
      <q-linear-progress
        :value="langData[1]"
        :color="getLanguageColor(langData[0])"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "LinearDataAboutLanguages",
  props: {
    user_languages: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getLanguageColor(languageName) {
      const colorOfTechnoligies = {
        JavaScript: "yellow-6",
        Python: "indigo",
        PHP: "blue",
        HTML: "orange",
        CSS: "blue",
        SCSS: "pink-4",
        Vue: "light-green",
        React: "dodgerblue",
      };
      if (Object.keys(colorOfTechnoligies).includes(languageName)) {
        return colorOfTechnoligies[languageName];
      } else {
        return "black";
      }
    },
  },
};
</script>

<style></style>
