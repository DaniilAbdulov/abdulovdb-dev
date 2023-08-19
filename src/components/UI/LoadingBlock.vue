<template>
    <div class="loading">
        <img :src="url" alt="Loading..." />
    </div>
</template>

<script>
export default {
    name: "loading-block",
    data() {
        return {
            url: "https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif",
        };
    },
};
</script>

<style scoped>
.loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.loading img {
    width: 50px;
}
</style>
