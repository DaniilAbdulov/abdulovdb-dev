<template>
    <router-link to="/blog">Back to the Posts</router-link>
    <div>
        <div>{{ postTitle }}</div>
        <div>{{ postBody }}</div>
        <div v-for="com in comments" :key="com.id">
            <div>{{ com.email }}</div>
            <div>{{ com.body }}</div>
            <div>{{ com.time }}</div>
            <social-button @click="removeComment(com.id)"
                >Delete comment</social-button
            >
        </div>
    </div>
    <new-comment-form @create="createComment"></new-comment-form>
</template>

<script>
import NewCommentForm from "@/components/NewCommentForm.vue";
export default {
    components: {
        NewCommentForm,
    },
    data() {
        return {
            comments: [],
            postId: this.$route.params.id,
            postTitle: this.$route.query.title,
            postBody: this.$route.query.body,
        };
    },
    methods: {
        removeComment(value) {
            this.comments = this.comments.filter((p) => p.id !== value);
        },
        async getCommentsForPost() {
            try {
                let response = await fetch(
                    `https://jsonplaceholder.typicode.com/comments?postId=${this.postId}`
                );
                if (!response.ok) {
                    throw new Error("Errorrrrr");
                } else {
                    this.comments = await response.json();
                    this.comments.forEach((comment) => {
                        const currentDate = new Date();
                        const options = {
                            dateStyle: "medium",
                            timeStyle: "short",
                        };
                        comment.time = currentDate.toLocaleString(
                            "ru",
                            options
                        );
                    });
                }
            } catch (error) {
                console.error(error);
            }
        },
        createComment(newComment) {
            this.comments.push(newComment);
        },
    },
    mounted() {
        this.getCommentsForPost();
    },
};
</script>
