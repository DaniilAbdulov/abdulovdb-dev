<template>
    <div class="post__title"><span>Title:</span> {{ post.title }}</div>
    <div class="post__body"><span>Body:</span> {{ post.body }}</div>
</template>
<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
};
</script>
<style></style>
