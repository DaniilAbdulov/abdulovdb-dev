<template>
    <div class="new-task">
        <input
            type="text"
            placeholder="new task"
            v-model="title"
            @keydown.enter="createTask"
        />

        <button type="submit" @click="createTask" class="create-button">
            Add
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
            this.$emit("create", newTask);
            this.title = "";
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
.new-task input {
    font-size: 24px;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    outline: none;
}
.create-button {
    font-size: 24px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    outline: none;
    transition: all 0.3s ease-in;
}
.create-button:hover {
    background-color: #ddd;
}
</style>
