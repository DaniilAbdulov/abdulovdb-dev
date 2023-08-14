<template>
    <div class="post">
        <post-headers :post="post"></post-headers>
        <div class="post__social">
            <social-buttons :post="post"></social-buttons>
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
    methods: {},
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
.post__title span,
.post__body span {
    font-weight: 700;
}
.post__body {
    margin-bottom: 10px;
}
.post__social {
    display: flex;
    gap: 5px;
}
</style>
