<template>
    <div class="posts">
        <div class="post">
            <post-headers :post="post"></post-headers>
        </div>
        <div v-for="comment in comments" :key="comment.id">
            <p>{{ comment.name }}</p>
            <p>{{ comment.email }}</p>
            <p>{{ comment.body }}</p>
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
    methods: {},
    setup(props) {
        let postId = this.postId();
        console.log(props);
        console.log(postId); //error  'computed' is not defined
        const { comments } = getComments();
        return {
            comments,
        };
    },
};
</script>
