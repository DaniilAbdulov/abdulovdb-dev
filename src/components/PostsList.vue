<template>
    <div class="posts">
        <post-item
            v-for="post in posts"
            :key="post.id"
            :post="post"
        ></post-item>
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
    methods: {},
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
