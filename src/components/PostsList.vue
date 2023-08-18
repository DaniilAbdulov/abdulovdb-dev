<template>
    <div>
        <div v-for="post in posts" :key="post.id">
            <div>{{ post.title }}</div>
            <div>{{ post.body }}</div>
            <social-button @click="post.like++"
                >Лайк {{ post.like }}</social-button
            >
            <social-button @click="showPostComments(post)">
                Комментарии {{ getCommentsCount(post.id) }}
            </social-button>
            <social-button @click="$emit('remove', post)">Delete</social-button>
            <div>{{ post.time }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        posts: {
            type: Array,
            required: true,
        },
        comments: {
            type: Array,
            required: true,
        },
    },
    methods: {
        getCommentsCount(postId) {
            return this.comments.filter((comment) => comment.postId === postId)
                .length;
        },
        showPostComments(post) {
            this.$router.push({
                path: `/post/${post.id}/comments`,
                query: { title: post.title, body: post.body },
            });
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
