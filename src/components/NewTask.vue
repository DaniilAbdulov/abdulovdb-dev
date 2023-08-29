<template>
    <div class="new-task">
        <input
            type="text"
            placeholder="new task"
            v-model="title"
            @keydown.enter="createTask"
        />

        <button type="submit" @click="createTask" class="create-button">
            Create
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "",
            completed: false,
        };
    },
    methods: {
        createTask() {
            const newTask = {
                id: Date.now(),
                title: this.title,
                completed: this.completed,
            };
            if (newTask.title) {
                this.$emit("create", newTask);
                this.title = "";
            }
        },
    },
    emits: ["create"],
};
</script>
<style scoped>
.new-task {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
    gap: 20px;
}
@media (max-width: 424px) {
    .new-task {
        padding: 15px 10px;
        gap: 10px;
    }
}
.new-task.search {
    display: none;
}
.new-task input {
    font-size: 24px;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    outline: none;
}
@media (max-width: 767px) {
    .new-task input {
        font-size: 16px;
        padding: 10px;
    }
}
.create-button {
    font-size: 24px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    outline: none;
    transition: all 0.3s ease-in;
}
@media (max-width: 767px) {
    .create-button {
        font-size: 16px;
    }
}
.create-button:hover {
    background-color: #ddd;
}
</style>
