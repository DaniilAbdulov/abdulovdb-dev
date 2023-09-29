<template>
  <div class="fc">
    <div class="fc__body">
      <transition appear enter-active-class="animated fadeIn">
        <img
          :src="user.avatar_url"
          style="border-radius: 50%; max-width: 400px"
        />
      </transition>
      <transition appear enter-active-class="animated fadeInLeft">
        <div class="text-h2 text-white text-center">AbdulovDB</div>
      </transition>
      <transition appear enter-active-class="animated fadeInRight">
        <div class="text-h3 text-grey-3 text-center">
          Junior Full-Stack Developer
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "FullScreen",
  computed: {
    ...mapState("git_hub_repos", {
      user: (state) => state.user,
    }),
  },
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
.animated.fadeInRight,
.animated.fadeInLeft {
  animation-duration: 2s !important;
  animation-delay: 1s !important;
}
.animated.fadeIn {
  animation-duration: 1s !important;
  animation-delay: 0.5s !important;
}
</style>
