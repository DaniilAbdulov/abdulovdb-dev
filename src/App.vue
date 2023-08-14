<template>
    <nav-bar />
    <div class="app">
        <router-view></router-view>
    </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
    components: {
        NavBar,
    },
};
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
}
</style>
