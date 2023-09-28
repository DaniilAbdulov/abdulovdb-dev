<template>
  <GeneralPage />
  <q-layout>
    <div class="custom-container">
      <q-page-container>
        <q-page padding>
          <router-view />
        </q-page>
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import GeneralPage from "src/components/GeneralPage.vue";
export default defineComponent({
  name: "App",
  components: {
    GeneralPage,
  },
});
</script>
