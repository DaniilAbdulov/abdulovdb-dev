<template>
    <div class="post">
        <post-headers :post="post"></post-headers>
        <div class="post__social">
            <social-buttons
                :post="post"
                @remove="handleRemovePost"
            ></social-buttons>
        </div>
    </div>
    <div class="comments">
        <comments-list :post-id="post.id" :comments="comments"></comments-list>
    </div>
</template>
<script>
import PostHeaders from "@/components/PostHeaders.vue";
import SocialButtons from "@/components/SocialButtons.vue";
import CommentsList from "@/components/CommentsList.vue";
export default {
    components: {
        SocialButtons,
        PostHeaders,
        CommentsList,
    },
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            comments: [],
        };
    },
    methods: {
        async getComments() {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/comments?_limit=500"
            );
            if (!response.ok) {
                throw new Error("Errorrrrr");
            } else {
                const json = await response.json();
                this.comments = json;
            }
        },
        handleRemovePost() {
            this.$emit("remove", this.post);
        },
    },
    mounted() {
        this.getComments();
    },
};
</script>
<style>
.post {
    position: relative;
    border: 1px solid black;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 10px;
}
.comments {
    margin-bottom: 10px;
}
</style>
