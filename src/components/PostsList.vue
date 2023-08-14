<template>
    <div class="post" v-for="post in posts" :key="post.id">
        <div class="post__title">{{ post.title }}</div>
        <div class="post__body">{{ post.body }}</div>
    </div>
</template>
<script>
export default {
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
    methods: {},
};
</script>
<style></style>
