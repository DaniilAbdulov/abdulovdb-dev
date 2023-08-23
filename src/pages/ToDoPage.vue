<template>
    <loading-block v-if="!dataIsLoaded"></loading-block>
    <div v-else class="todo__content">
        <new-task @create="createTask"></new-task>
        <task-list :todos="todos" @remove="removeTodo"></task-list>
    </div>
</template>
<script>
import TaskList from "@/components/TaskList.vue";
import NewTask from "@/components/NewTask.vue";
export default {
    components: {
        TaskList,
        NewTask,
    },
    data() {
        return {
            todos: [],
            dataIsLoaded: false,
        };
    },
    methods: {
        removeTodo(value) {
            this.todos = this.todos.filter((p) => p.id !== value.id);
        },
        createTask(newTask) {
            this.todos.unshift(newTask);
        },
        async getToDos() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/todos?_limit=5"
                );
                if (!response.ok) {
                    throw new Error("Errorrrrrrrr");
                } else {
                    this.todos = await response.json();
                    this.dataIsLoaded = true;
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.getToDos();
    },
};
</script>
<style scoped>
.new-task {
    margin-bottom: 20px;
}
</style>
