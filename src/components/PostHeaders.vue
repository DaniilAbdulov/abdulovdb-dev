<template>
    <div>
        <div class="post__title">{{ post.title }}</div>
    </div>
    <div>
        <div class="post__body">{{ post.body }}</div>
    </div>
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
<style>
.post__body {
    margin-bottom: 10px;
}
.post__social {
    display: flex;
    gap: 5px;
}
.post__title {
    font-size: 18px;
    font-weight: bold;
}
.post__title::first-letter,
.post__body::first-letter {
    text-transform: capitalize;
}
</style>
