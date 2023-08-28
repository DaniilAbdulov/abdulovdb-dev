<template>
    <loading-block v-if="!dataIsLoaded"></loading-block>
    <div>
        <router-link class="routerLink" to="/blog"
            ><back-button></back-button
        ></router-link>
        <div>
            <div class="post__title">{{ postTitle }}</div>
            <div class="post__body">{{ postBody }}</div>
        </div>
        <new-comment-form @create="createComment"></new-comment-form>
        <div v-if="comments.length">
            <comments-list
                :comments="comments"
                @remove="removeComment"
            ></comments-list>
        </div>
        <empty-list v-else></empty-list>
    </div>
</template>

<script>
import NewCommentForm from "@/components/NewCommentForm.vue";
import CommentsList from "@/components/CommentsList.vue";
export default {
    components: {
        NewCommentForm,
        CommentsList,
    },
    data() {
        return {
            comments: [],
            postId: this.$route.params.id,
            postTitle: this.$route.query.title,
            postBody: this.$route.query.body,
            dataIsLoaded: false,
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
                    this.dataIsLoaded = true;
                }
            } catch (error) {
                console.error(error);
            }
        },
        createComment(newComment) {
            this.comments.unshift(newComment);
        },
    },
    mounted() {
        this.getCommentsForPost();
    },
};
</script>
<style scoped>
.empty-list {
    margin-top: 20px;
    position: relative;
    top: 0;
    left: 0;
    transform: translate(-0%, -0%);
}
</style>
