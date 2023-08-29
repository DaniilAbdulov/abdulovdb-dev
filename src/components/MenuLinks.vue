<template>
    <div class="navigation-wrapper">
        <div @click="$router.push('/')" class="logo-wrapper">
            <span class="stylish">AbdulovDB</span>
        </div>
        <ul class="navigation">
            <li class="parent">
                <button class="link" @click="$router.push('/about')">
                    About
                </button>
            </li>
            <li class="parent">
                <button class="link" @click="$router.push('/gallery')">
                    Gallery
                </button>
            </li>
            <li class="parent">
                <button class="link" @click="$router.push('/blog')">
                    Blog
                </button>
            </li>
            <li class="parent">
                <button class="link" @click="$router.push('/todo')">
                    ToDo
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
