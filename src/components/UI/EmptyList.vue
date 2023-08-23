<template>
    <div class="empty-list">
        <img src="@/assets/empty__list.webp" />
        <h1>Ooops...list is empty</h1>
    </div>
</template>

<script>
export default {
    name: "empty-list",
    data() {
        return {};
    },
};
</script>

<style>
.empty-list {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    text-align: center;
}
.empty-list h1 {
    margin-bottom: 20px;
}
.empty-list img {
    width: 100%;
    object-fit: cover;
}
</style>
