<template>
    <loading-block v-if="!dataIsLoaded"></loading-block>
    <div v-else class="todo__content">
        <div class="todo__functional">
            <new-task @create="createTask"></new-task>
            <search-value v-model="searchQuery"></search-value>
        </div>
        <task-list :todos="searchTodos" @remove="removeTodo"></task-list>
    </div>
</template>
<script>
import TaskList from "@/components/TaskList.vue";
import NewTask from "@/components/NewTask.vue";
import SearchValue from "@/components/SearchValue.vue";
export default {
    components: {
        TaskList,
        NewTask,
        SearchValue,
    },
    data() {
        return {
            todos: [],
            dataIsLoaded: false,
            searchQuery: "",
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
                    "https://jsonplaceholder.typicode.com/todos"
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
    computed: {
        searchTodos() {
            return this.todos.filter((todo) =>
                todo.title
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase())
            );
        },
    },
};
</script>
<style scoped>
.sorted-todo {
    border: 1px solid black;
    border-radius: 50%;
    padding: 10px;
}
.todo__content {
}
@media (max-width: 500px) {
    .todo__content {
        margin-top: 80px;
    }
}
.todo__functional {
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1000px;
    margin: 0 auto;
}
.new-task {
    flex: 1 1 auto;
}
</style>
