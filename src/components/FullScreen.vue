<template>
  <div class="fc">
    <transition
      appear
      enter-active-class="animated fadeInUpBig"
      leave-active-class="animated backInUpOut"
    >
      <div class="fc__body">
        <img
          src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
          style="width: 150px; height: 150px"
        />
        <div class="text-h3 text-white text-center">Quasar Framework</div>
        <div class="text-h6 text-grey-3 text-center">v{{ $q.version }}</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "FullScreen",
};
</script>

<style>
.fc {
  margin-top: 50px;
  min-height: 100vh;
  background: url("https://ogorshkov.ru/wp-content/uploads/9/0/c/90c013d1762e2186f1788a37d3b6e871.png")
    center / cover no-repeat fixed;
  display: flex;
  padding: 10px 0px;
}
.fc__body {
  flex: 1 1 auto;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fc__title {
}
</style>
