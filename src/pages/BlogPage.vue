<template>
    <div class="blog">
        <div class="blog__wrapper">
            <div class="blog__content">
                <div class="create">
                    <form @submit.prevent>
                        <input
                            type="text"
                            placeholder="Title"
                            v-model="title"
                        />
                        <input type="text" placeholder="Body" v-model="body" />
                        <button type="submit" @click="createPost">
                            Create
                        </button>
                    </form>
                </div>
                <posts-list :posts="posts"></posts-list>
            </div>
        </div>
    </div>
</template>
<script>
import PostsList from "@/components/PostsList.vue";
export default {
    components: {
        PostsList,
    },
    data() {
        return {
            posts: [
                { id: "1", title: "First", body: "Body of first post" },
                { id: "2", title: "Second", body: "Body of second post" },
            ],
            title: "",
            body: "",
        };
    },
    methods: {
        createPost() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body,
            };
            this.posts.push(newPost);
            (this.title = ""), (this.body = "");
        },
    },
};
</script>
<style></style>
