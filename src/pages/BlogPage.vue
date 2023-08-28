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
                    <search-value
                        :model-value="searchQuery"
                        @update:model-value="setSearchQuery"
                    ></search-value>
                </div>
                <div class="blog__body">
                    <posts-list
                        :posts="searchPosts"
                        @remove="removePost"
                        :comments="comments"
                        :dialogVisible="dialogVisible"
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
import SearchValue from "@/components/SearchValue.vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
    components: {
        PostsList,
        PostForm,
        SearchValue,
    },
    data() {
        return {
            comments: [],
            dataIsLoaded: false,
        };
    },
    methods: {
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
        ...mapMutations({
            setPostPage: "post/setPostPage",
            setSearchQuery: "post/setSearchQuery",
        }),
        ...mapActions({
            getPosts: "post/getPosts",
            loadMorePosts: "post/loadMorePosts",
            createPost: "post/createPost",
            removePost: "post/removePost",
            showDialog: "post/showDialog",
        }),
    },
    mounted() {
        this.getPosts();
        this.getAllComments();
    },
    computed: {
        ...mapState({
            posts: (state) => state.post.posts,
            like: (state) => state.post.like,
            dialogVisible: (state) => state.post.dialogVisible,
            searchQuery: (state) => state.post.searchQuery,
            postPage: (state) => state.post.postPage,
            postLimit: (state) => state.post.postLimit,
            totalPage: (state) => state.post.totalPage,
        }),
        ...mapGetters({
            searchPosts: "post/searchPosts",
        }),
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
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
}
</style>
