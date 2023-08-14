<template>
    <div class="create">
        <form @submit.prevent>
            <input type="text" placeholder="Title" v-model="title" />
            <input type="text" placeholder="Body" v-model="body" />
            <button type="submit" @click="createPost">Create</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "",
            body: "",
        };
    },
    methods: {
        createPost() {
            const post = {
                id: Date.now(),
                title: this.title,
                body: this.body,
            };
            this.$emit("create", post);
            (this.title = ""), (this.body = "");
        },
    },
};
</script>
<style></style>
