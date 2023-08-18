<template>
    <div>
        <div v-for="post in posts" :key="post.id">
            <div>{{ post.body }}</div>
            <button @click="post.like++">Лайк {{ post.like }}</button>
            <button @click="showPostComments(post)">
                Комментарии {{ getCommentsCount(post.id) }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [],
            comments: [],
        };
    },
    methods: {
        getCommentsCount(postId) {
            return this.comments.filter((comment) => comment.postId === postId)
                .length;
        },
        showPostComments(post) {
            this.$router.push({
                path: `/post/${post.id}/comments`,
                query: { body: post.body },
            });
        },
        async getPosts() {
            try {
                let response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts?_limit=100`
                );
                if (!response.ok) {
                    throw new Error("Errorrrrr");
                } else {
                    this.posts = await response.json();
                    this.getAllComments();
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getAllComments() {
            try {
                let response = await fetch(
                    `https://jsonplaceholder.typicode.com/comments?_limit=500`
                );
                if (!response.ok) {
                    throw new Error("Errorrrrr");
                } else {
                    this.comments = await response.json();
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
    mounted() {
        this.getPosts();
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
