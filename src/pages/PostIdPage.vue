<template>
    <div>
        <h1>Hello it's post with id = {{ postId }}</h1>
        <div>{{ postBody }}</div>
        <div v-for="com in comments" :key="com.id">{{ com.email }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            comments: [],
            postId: this.$route.params.id,
            postBody: this.$route.query.body,
        };
    },
    computed: {},
    created() {},
    methods: {
        async getCommentsForPost() {
            try {
                let response = await fetch(
                    `https://jsonplaceholder.typicode.com/comments?postId=${this.postId}`
                );
                if (!response.ok) {
                    throw new Error("Errorrrrr");
                } else {
                    this.comments = await response.json();
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
    mounted() {
        this.getCommentsForPost();
    },
};
</script>
