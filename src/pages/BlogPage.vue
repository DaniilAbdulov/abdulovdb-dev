<template>
    <div class="blog">
        <div class="blog__wrapper">
            <div class="blog__content">
                <div class="blog__buttons">
                    <create-button @click="showDialog">+</create-button>
                    <my-dialog v-model:show="dialogVisible">
                        <post-form @create="createPost"></post-form>
                    </my-dialog>
                    <search-posts v-model="searchQuery"></search-posts>
                </div>
                <posts-list
                    :posts="searchPosts"
                    @remove="removePost"
                    :comments="comments"
                ></posts-list>
            </div>
        </div>
    </div>
</template>
<script>
import PostForm from "@/components/PostForm.vue";
import PostsList from "@/components/PostsList.vue";
import SearchPosts from "@/components/SearchPosts.vue";
export default {
    components: {
        PostsList,
        PostForm,
        SearchPosts,
    },
    data() {
        return {
            posts: [],
            comments: [],
            like: 0,
            dialogVisible: false,
            searchQuery: "",
        };
    },
    methods: {
        showDialog() {
            this.dialogVisible = true;
        },
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter((p) => p.id !== post.id);
        },
        async getPostsAndComments() {
            try {
                let response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts?_limit=5`
                );
                if (!response.ok) {
                    throw new Error("Errorrrrr");
                } else {
                    this.posts = await response.json();
                    const currentDate = new Date();
                    const options = {
                        dateStyle: "medium",
                        timeStyle: "short",
                    };
                    this.posts.forEach((post) => {
                        post.like = Math.random().toFixed(1) * 10;
                        post.time = currentDate.toLocaleString("ru", options);
                    });
                    this.getAllComments();
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getAllComments() {
            try {
                let response = await fetch(
                    `https://jsonplaceholder.typicode.com/comments?_limit=25`
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
        this.getPostsAndComments();
    },
    computed: {
        searchPosts() {
            return this.posts.filter(
                (post) =>
                    post.title
                        .toLowerCase()
                        .includes(this.searchQuery.toLowerCase()) ||
                    post.body
                        .toLowerCase()
                        .includes(this.searchQuery.toLowerCase())
            );
        },
    },
};
</script>
<style>
.blog__wrapper {
    max-width: 1280px;
    margin: 0 auto;
}
.blog__buttons {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>
