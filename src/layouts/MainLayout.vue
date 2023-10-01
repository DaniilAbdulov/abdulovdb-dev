<template>
  <q-layout view="hHh Lpr lFf">
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
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

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
    icon: "img:https://www.svgrepo.com/show/306328/leetcode.svg",
    link: "https://leetcode.com/daniilabdulov",
  },

  {
    title: "CodeWars",
    caption: "codewars.com/abdulovdb",
    icon: "img:https://uploads-ssl.webflow.com/62e95dddfb380a0e61193e7d/6363e7db70db732290fa3db6_logo-256.png",
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
  {
    title: "hh",
    caption: "hh.ru/resume/abdulovdb",
    icon: "img:https://static.tildacdn.com/tild3966-3962-4162-a335-393163373661/2323.png",
    link: "https://tyumen.hh.ru/resume/5bacdf70ff0c04535b0039ed1f6a67364e774d",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
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
<style lang="scss">
.q-header {
  background: $dark;
}
</style>
