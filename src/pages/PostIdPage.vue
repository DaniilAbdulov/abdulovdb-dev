<template>
    <div class="posts">
        <div class="post">
            <post-headers :post="post"></post-headers>
        </div>
        <div>Comments:</div>
        <comments-list
            :post-id="postId"
            :comments="filteredComments"
        ></comments-list>
    </div>
</template>

<script>
import PostHeaders from "@/components/PostHeaders.vue";
import CommentsList from "@/components/CommentsList.vue";
export default {
    components: {
        PostHeaders,
        CommentsList,
    },
    props: {
        comments: {
            type: Array,
            required: true,
        },
    },
    computed: {
        post() {
            return {
                id: this.$route.params.id,
                title: this.$route.query.title,
                body: this.$route.query.body,
            };
        },
        postId() {
            return parseInt(this.post.id, 10);
        },
        filteredComments() {
            if (!this.comments) return [];
            return this.comments.filter(
                (comment) => comment.postId === this.postId
            );
        },
    },
};
</script>
