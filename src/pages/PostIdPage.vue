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
                :comments="filterComments"
                @remove="removeComment"
            ></comments-list>
        </div>
        <empty-list v-else></empty-list>
    </div>
</template>

<script>
import NewCommentForm from "@/components/NewCommentForm.vue";
import CommentsList from "@/components/CommentsList.vue";
import { mapState, mapActions } from "vuex";
export default {
    components: {
        NewCommentForm,
        CommentsList,
    },
    data() {
        return {
            postId: this.$route.params.id,
            postTitle: this.$route.query.title,
            postBody: this.$route.query.body,
            dataIsLoaded: false,
        };
    },
    methods: {
        ...mapActions({
            getAllComments: "comments/getAllComments",
            createComment: "comments/createComment",
            removeComment: "comments/removeComment",
        }),
    },
    mounted() {
        this.getAllComments();
        this.dataIsLoaded = true;
    },
    computed: {
        ...mapState({
            comments: (state) => state.comments.comments,
        }),
        filterComments() {
            return this.comments.filter(
                (element) => element.postId == this.postId
            );
        },
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
