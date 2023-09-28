<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round aria-label="Menu" @click="toggleLeftDrawer"
          ><q-icon name="fa-solid fa-bars"
        /></q-btn>
        <q-toolbar-title> AbdulovDB </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> My Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <!-- <GeneralPage /> -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
// import GeneralPage from "src/components/GeneralPage.vue";

const linksList = [
  {
    title: "Github",
    caption: "github.com/daniilabdulov",
    icon: "fa-brands fa-github fa-bounce",
    link: "https://github.com/daniilabdulov",
  },
  {
    title: "LeetCode",
    caption: "leetcode.com/daniilabdulov",
    icon: "fa-solid fa-link",
    link: "https://leetcode.com/daniilabdulov",
  },
  {
    title: "CodeWars",
    caption: "codewars.com/abdulovdb",
    icon: "fa-solid fa-link",
    link: "https://www.codewars.com/users/abdulovdb",
  },
  {
    title: "Telegram",
    caption: "t.me/ABDULOVDB",
    icon: "fa-brands fa-telegram fa-spin",
    link: "https://t.me/ABDULOVDB",
  },
  {
    title: "Instagram",
    caption: "instagram.com/abdulovdb",
    icon: "fa-brands fa-instagram fa-beat",
    link: "https://instagram.com/abdulovdb",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    // GeneralPage,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
