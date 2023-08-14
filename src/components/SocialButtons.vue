<template>
    <button class="delete" @click="removePost"></button>
    <button @click="like++">Like</button>
    <div v-if="like > 0" class="like">{{ like }}</div>
    <button
        @click="
            $router.push({
                path: `/posts/${post.id}`,
                query: { title: post.title, body: post.body },
            })
        "
    >
        Comments
    </button>
    <div v-if="comment > 0" class="comment">{{ comment }}</div>
</template>
<script>
export default {
    data() {
        return {
            like: 0,
            comment: 0,
        };
    },
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    methods: {
        removePost() {
            this.$emit("remove", this.post);
        },
    },
};
</script>
<style>
.delete {
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-style: italic;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
}
</style>
