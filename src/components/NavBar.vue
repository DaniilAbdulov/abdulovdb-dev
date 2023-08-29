<template>
    <menu-links></menu-links>
</template>
<script>
import MenuLinks from "./MenuLinks.vue";

export default {
    components: {
        MenuLinks,
    },
};
</script>
<style>
.navigation-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #222;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
    color: rgb(253, 252, 252);
    text-transform: uppercase;
    overflow: hidden;
    width: 100%;
    margin-bottom: 40px;
    font-size: 20px;
}
.logo-wrapper {
    display: flex;
    cursor: pointer;
}
.stylish {
    font-weight: bold;
}
.navigation {
    display: flex;
    list-style-type: none;
}

.parent {
    padding: 0 10px;
    cursor: pointer;
}
.link {
    position: relative;
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;
    background: none;
    color: white;
}
</style>
