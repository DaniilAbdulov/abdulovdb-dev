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
        <div class="comments">
            <TransitionGroup name="list">
                <div v-for="com in comments" :key="com.id" class="comment">
                    <div class="comment__author">
                        {{ com.email }}
                    </div>
                    <div class="comment__content">
                        <div class="comment__body">{{ com.body }}</div>
                        <div class="comment__dlc">
                            <div class="comment__time">
                                {{ com.time }}
                            </div>
                            <div class="comment__delete">
                                <trash-button
                                    @click="removeComment(com.id)"
                                ></trash-button>
                            </div>
                        </div>
                    </div>
                </div>
            </TransitionGroup>
        </div>
    </div>
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
            this.comments.push(newComment);
        },
    },
    mounted() {
        this.getCommentsForPost();
    },
};
</script>
<style scoped>
.comments {
    margin-top: 20px;
    margin-bottom: 15px;
    padding: 10px;
    box-shadow: 1px 1px 1px 1px black;
    border-radius: 10px;
}
.comment {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}
.comment__author {
    font-size: 15px;
    writing-mode: vertical-lr;
    transform: rotate(-180deg);
}
.comment__content {
    display: flex;
    flex-direction: column;
    flex: 0 1 90%;
    justify-content: space-between;
    border-bottom: 2px solid black;
}
.comment__body {
    font-size: 20px;
    margin-bottom: 10px;
}
.comment__body::first-letter {
    text-transform: uppercase;
}
.comment__dlc {
    display: flex;
    justify-content: space-between;
}
.comment__time {
    font-style: italic;
}
.comment__delete {
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
