<template>
    <div class="posts">
        <div class="post">
            <post-headers :post="post"></post-headers>
        </div>
        <div>Comments:</div>
        <div
            class="post__comment comment"
            v-for="com in comments"
            :key="com.id"
        >
            <div class="comment">
                <div class="comment__name">Header: {{ com.name }}</div>
                <div class="comment__email">User: {{ com.email }}</div>
                <div class="comment__body">{{ com.body }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import PostHeaders from "@/components/PostHeaders.vue";
export default {
    components: {
        PostHeaders,
    },
    data() {
        return {
            comments: [
                {
                    id: 1,
                    name: "comment label1",
                    email: "user1@mail.com",
                    body: "text of comment1",
                },
                {
                    id: 2,
                    name: "comment label2",
                    email: "user2@mail.com",
                    body: "text of comment2",
                },
            ],
        };
    },
    computed: {
        post() {
            return {
                title: this.$route.query.title,
                body: this.$route.query.body,
            };
        },
    },
};
</script>
<style></style>
