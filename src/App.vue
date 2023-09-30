<template>
  <div class="wrapper">
    <q-layout>
      <FullScreen />
      <div class="custom-container">
        <q-page-container>
          <q-page padding>
            <router-view />
          </q-page>
        </q-page-container>
      </div>
    </q-layout>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import FullScreen from "src/components/FullScreen.vue";
export default defineComponent({
  name: "App",
  components: {
    FullScreen,
  },
});
</script>
