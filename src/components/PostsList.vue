<template>
    <div class="posts">
        <post-item
            v-for="post in posts"
            :key="post.id"
            :post="post"
            @remove="handleRemovePostFromList"
        >
        </post-item>
    </div>
</template>
<script>
import PostItem from "./PostItem.vue";

export default {
    components: {
        PostItem,
    },
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
    methods: {
        handleRemovePostFromList(postToRemove) {
            this.$emit("remove", postToRemove);
        },
    },
};
</script>
<style>
.posts {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    padding: 0 15px;
}
</style>
