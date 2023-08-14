<template>
    <div class="navbar">
        <div @click="$router.push('/')">AbdulovDB</div>
        <button @click="$router.push('/about')">About</button>
        <button @click="$router.push('/blog')">Blog</button>
        <button @click="$router.push('/todo')">ToDo</button>
    </div>
</template>
<script>
export default {};
</script>
<style>
.navbar {
    height: 50px;
    background-color: gray;
}
</style>
