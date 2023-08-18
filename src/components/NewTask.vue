<template>
    <div class="new-task">
        <input
            type="text"
            placeholder="new task"
            v-model="title"
            @keydown.enter="createTask"
        />
        <create-button type="submit" @click="createTask">+</create-button>
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
        },
    },
    emits: ["create"],
};
</script>
<style>
.new-task {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;
}
.new-task input {
    width: 100%;
    height: 30px;
    border-radius: 10px;
}
</style>
