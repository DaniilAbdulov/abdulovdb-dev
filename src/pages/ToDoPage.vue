<template>
    <div class="todoPage">
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
        };
    },
    methods: {
        removeTodo(value) {
            this.todos = this.todos.filter((p) => p.id !== value.id);
        },
        createTask(newTask) {
            this.todos.push(newTask);
        },
        async getToDos() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/todos?_limit=15"
                );
                if (!response.ok) {
                    throw new Error("Errorrrrrrrr");
                } else {
                    this.todos = await response.json();
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
<style>
.todoPage {
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}
</style>
