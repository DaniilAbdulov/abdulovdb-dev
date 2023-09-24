<template>
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

export default defineComponent({
  name: "App",
});
</script>
