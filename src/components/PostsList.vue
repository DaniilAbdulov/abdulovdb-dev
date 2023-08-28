<template>
    <ul v-if="posts.length">
        <TransitionGroup name="list" tag="ul">
            <li v-for="post in posts" :key="post.id" class="post">
                <div class="post__content">
                    <div class="post__title">{{ post.title }}</div>
                    <div class="post__time">{{ post.time }}</div>
                    <div class="post__body">{{ post.body }}</div>
                    <div class="post__buttons">
                        <div class="post__lnc">
                            <div class="post__like">
                                <like-button
                                    @click="onButtonClick(post)"
                                    :class="{
                                        'like-button--active':
                                            post.buttonClicked,
                                    }"
                                >
                                    {{ post.like }}
                                </like-button>
                            </div>
                            <div class="post__com">
                                <comment-button @click="showPostComments(post)">
                                    {{ getCommentsCount(post.id) }}
                                </comment-button>
                            </div>
                        </div>
                        <div class="post__delete">
                            <trash-button
                                @click="$emit('remove', post)"
                            ></trash-button>
                        </div>
                    </div>
                </div>
            </li>
        </TransitionGroup>
    </ul>
    <empty-list v-else-if="!dialogVisible"></empty-list>
</template>

<script>
import CommentButton from "./UI/CommentButton.vue";
export default {
    components: { CommentButton },
    props: {
        posts: {
            type: Array,
            required: true,
        },
        comments: {
            type: Array,
            required: true,
        },
        dialogVisible: {
            type: Boolean,
        },
    },
    data() {
        return {};
    },
    methods: {
        async onButtonClick(post) {
            post.like++;
            post.buttonClicked = true;

            setTimeout(() => {
                post.buttonClicked = false;
            }, 500);
        },
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
.post {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px black;
    overflow: hidden;
    justify-content: center;
}
.post__time {
    margin-bottom: 10px;
}
.post__content {
    flex: 0 1 90%;
    overflow-wrap: break-word;
}
.post__title {
    font-size: 32px;
    color: #6eeb83;
    margin-bottom: 20px;
    overflow-wrap: break-word;
}
.post__title::first-letter {
    text-transform: uppercase;
}
.post__body::first-letter {
    text-transform: uppercase;
}
.post__body {
    font-style: italic;
    font-size: 20px;
    margin-bottom: 20px;
    overflow-wrap: break-word;
}
.post__buttons {
    display: flex;
    justify-content: space-between;
}
.post__lnc {
    display: flex;
    gap: 10px;
}

.post__com {
}
.post__delete {
}
.like-button {
    font-size: 18px;
    transition: all 0.2s;
}
.like-button--active {
    color: red;
    font-size: 24px;
    transform: rotate(5deg);
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
