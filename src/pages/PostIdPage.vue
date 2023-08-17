<template>
    <div class="posts">
        <div class="post">
            <post-headers :post="post"> </post-headers>
        </div>
        <div
            class="comment"
            v-for="comment in comments"
            :key="comment.id"
            :post="post"
        >
            <p v-if="comment.postId == post.id">{{ comment.email }}</p>
        </div>
    </div>
</template>
<script>
import PostHeaders from "@/components/PostHeaders.vue";
import { getComments } from "@/hooks/getComments";
export default {
    components: {
        PostHeaders,
    },
    props: {},
    computed: {
        post() {
            return {
                id: this.$route.params.id,
                title: this.$route.query.title,
                body: this.$route.query.body,
            };
        },
        postId() {
            if (this.post && this.post.id) {
                return parseInt(this.post.id, 10);
            } else {
                return null;
            }
        },
    },
    setup(props) {
        console.log(props);
        const { comments } = getComments();
        return {
            comments,
        };
    },
};
</script>
<style>
.comment {
    max-width: 70%;
    margin: 0 auto;
    width: 100%;
    border: 1px solid black;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 10px;
}
</style>
