<template>
    <div class="create">
        <form @submit.prevent="createComment">
            <div class="form__general">
                <div class="form__author">
                    <input type="text" placeholder="@email" v-model="email" />
                </div>
                <div>
                    <button type="submit" class="form__button">
                        Оставить комментарий
                    </button>
                </div>
            </div>
            <div class="form__body">
                <textarea
                    type="text"
                    placeholder="Введите комментарий"
                    v-model="body"
                />
            </div>
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
<style scoped lang="scss">
form {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid black;
    max-width: 400px;
}
.form__general {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    gap: 5px;
}
@media (max-width: 430px) {
    .form__general {
        flex-direction: column;
        align-items: stretch;
    }
}
.form__author {
    flex: 1 1 auto;
}
.form__button {
    text-align: center;
    border-top: 0.5px solid black;
    border-bottom: 0.5px solid black;
    padding: 1px 5px;
}
.form__body {
    width: 100%;
}
input {
    width: 100%;
    padding: 1px 5px;
}
textarea {
    padding: 4px;
    width: 100%;
}
</style>
