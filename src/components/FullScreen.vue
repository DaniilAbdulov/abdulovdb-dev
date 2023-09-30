<template>
  <div class="fc">
    <div class="fc__body">
      <transition appear enter-active-class="animated fadeIn">
        <div class="logo">
          <img src="../assets/abdulovdb.jpg" />
        </div>
      </transition>
      <transition appear enter-active-class="animated fadeInLeft">
        <div class="text-h2 text-white text-center">AbdulovDB</div>
      </transition>
      <transition appear enter-active-class="animated fadeInRight">
        <div class="text-h4 text-grey-3 text-center">
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
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
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
  padding: 0px 10px;
}
.logo {
  max-width: 400px;
  padding: 0px 15px;
}
.logo img {
  object-fit: cover;
  width: 100%;
  border-radius: 50%;
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
