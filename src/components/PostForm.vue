<template>
    <div class="create">
        <form @submit.prevent="createPost">
            <input type="text" placeholder="Title" v-model="title" required />
            <textarea placeholder="Body" v-model="body" required></textarea>
            <button type="submit">Create</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            body: "",
            like: 0,
        };
    },
    methods: {
        createPost() {
            const currentDate = new Date();
            const options = {
                dateStyle: "medium",
                timeStyle: "short",
            };
            const post = {
                id: Date.now(),
                title: this.title,
                body: this.body,
                like: this.like,
                time: currentDate.toLocaleString("ru", options),
            };
            this.$emit("create", post);
            (this.title = ""), (this.body = "");
        },
    },
};
</script>

<style scoped>
form {
    display: flex;
    padding: 0px 5px;
    flex-direction: column;
}
input {
    height: 40px;
    margin-bottom: 20px;
}
textarea {
    min-height: 100px;
    margin-bottom: 20px;
}
button {
    border: 1px solid black;
    padding: 10px;
}
</style>
