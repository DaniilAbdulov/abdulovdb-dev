<template>
    <loading-block v-if="!dataIsLoaded"></loading-block>
    <div class="blog" v-else>
        <div class="blog__wrapper">
            <div class="blog__content">
                <div class="blog__buttons">
                    <create-button @click="showDialog">+</create-button>
                    <my-dialog v-model:show="dialogVisible">
                        <post-form @create="createPost"></post-form>
                    </my-dialog>
                    <search-posts v-model="searchQuery"></search-posts>
                </div>
                <div class="blog__body">
                    <posts-list
                        :posts="searchPosts"
                        @remove="removePost"
                        :comments="comments"
                    ></posts-list>
                    <div v-intersection="loadMorePosts" class="observer"></div>
                </div>
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
            dataIsLoaded: false,
            postPage: 1,
            postLimit: 10,
            totalPage: 0,
        };
    },
    methods: {
        async loadMorePosts() {
            try {
                this.postPage += 1;
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts?_page=${this.postPage}&_limit=${this.postLimit}`
                );

                if (!response.ok) {
                    throw new Error("Error");
                }

                const totalCount = parseInt(
                    response.headers.get("x-total-count"),
                    10
                );
                this.totalPage = Math.ceil(totalCount / this.postLimit);
                const data = await response.json();
                this.posts = [...this.posts, ...data];
                const currentDate = new Date();
                const options = {
                    dateStyle: "medium",
                    timeStyle: "short",
                };
                this.posts.forEach((post) => {
                    post.like = Math.floor(Math.random() * 10);
                    post.time = currentDate.toLocaleString("ru", options);
                });
            } catch (error) {
                alert(error);
            }
        },
        showDialog() {
            this.dialogVisible = true;
        },
        createPost(post) {
            this.posts.unshift(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter((p) => p.id !== post.id);
        },
        async getPosts() {
            try {
                let response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts?_page=${this.postPage}&_limit=${this.postLimit}`
                );
                if (!response.ok) {
                    throw new Error("Errorrrrr");
                } else {
                    const totalCount = parseInt(
                        response.headers.get("x-total-count"),
                        10
                    );
                    this.totalPage = Math.ceil(totalCount / this.postLimit);
                    this.posts = await response.json();
                    const currentDate = new Date();
                    const options = {
                        dateStyle: "medium",
                        timeStyle: "short",
                    };
                    this.posts.forEach((post) => {
                        post.like = Math.floor(Math.random() * 10);
                        post.time = currentDate.toLocaleString("ru", options);
                    });
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getAllComments() {
            try {
                let response = await fetch(
                    `https://jsonplaceholder.typicode.com/comments`
                );
                if (!response.ok) {
                    throw new Error("Errorrrrr");
                } else {
                    this.comments = await response.json();
                    this.dataIsLoaded = true;
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
    mounted() {
        this.getPosts();
        this.getAllComments();
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

        allPostsAreLoaded() {
            return this.postPage >= this.totalPage;
        },
    },
};
</script>
<style>
.blog {
}
.blog__content {
}
.blog__wrapper {
    max-width: 1280px;
    margin: 0 auto;
}
.blog__buttons {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}
.blog__body {
}
.observer {
    height: 30px;
}
</style>
