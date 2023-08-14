<template>
    <div class="blog">
        <div class="blog__wrapper">
            <div class="blog__content">
                <post-form @create="createPost"></post-form>
                <posts-list :posts="posts"></posts-list>
            </div>
        </div>
    </div>
</template>
<script>
import PostForm from "@/components/PostForm.vue";
import PostsList from "@/components/PostsList.vue";
export default {
    components: {
        PostsList,
        PostForm,
    },
    data() {
        return {
            posts: [],
        };
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
        },
        async getPosts() {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=10"
            );
            if (!response.ok) {
                throw new Error("Errorrrrr");
            } else {
                const json = await response.json();
                this.posts = json;
            }
        },
    },
    mounted() {
        this.getPosts();
    },
};
</script>
<style>
.blog {
}
.blog__wrapper {
    max-width: 1280px;
    margin: 0 auto;
}
.blog__content {
}
</style>
