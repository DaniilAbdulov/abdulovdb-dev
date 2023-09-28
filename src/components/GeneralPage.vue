<template>
  <div>
    <div>
      <q-parallax
        class="fullscreen"
        style="margin-top: 50px; position: absolute; margin-bottom: 30px"
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      >
        <h1 class="text-white">Basic</h1>
      </q-parallax>
    </div>
  </div>
</template>

<script>
export default {
  name: "GeneralPage",
};
</script>

<style lang="scss" scoped>
// .full-screen {
//   position: relative;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;

//   &__body {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }
// }
</style>
