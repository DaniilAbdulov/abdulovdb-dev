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
</template>
<script>
import PostHeaders from "@/components/PostHeaders.vue";
import SocialButtons from "@/components/SocialButtons.vue";
export default {
    components: {
        SocialButtons,
        PostHeaders,
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
        handleRemovePost(postToRemove) {
            this.$emit("remove", postToRemove);
        },
    },
    mounted() {},
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
