<template>
  <div>
    <div class="statistic">
      <div
        class="statistic__container"
        v-for="lang in languages"
        :key="lang[0]"
      >
        <div class="statistic__item">{lang}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinearDataAboutLanguages",
  data() {
    return {
      languages: {
        JavaScript: 0.21659379171726728,
        Vue: 0.12083128670742843,
        SCSS: 0.1687208261638647,
        HTML: 0.3145093974030201,
        CSS: 0.1740772102806414,
        PHP: 0.005267487727778163,
      },
    };
  },
};
</script>

<style></style>
