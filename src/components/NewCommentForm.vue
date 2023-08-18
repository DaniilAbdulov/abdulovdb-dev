<template>
    <div class="create">
        <form @submit.prevent>
            <input type="text" placeholder="@email" v-model="email" />
            <input type="text" placeholder="Body" v-model="body" />
            <button type="submit" @click="createComment">Create comment</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: "",
            body: "",
        };
    },
    methods: {
        createComment() {
            const currentDate = new Date();
            const options = {
                dateStyle: "medium",
                timeStyle: "short",
            };
            const newComment = {
                id: Date.now(),
                email: this.email,
                body: this.body,
                time: currentDate.toLocaleString("ru", options),
            };
            this.$emit("create", newComment);
            (this.email = ""), (this.body = "");
        },
    },
};
</script>
<style></style>
