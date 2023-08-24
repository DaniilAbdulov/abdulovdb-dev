<template>
    <div v-if="todos.length">
        <TransitionGroup name="list" tag="ul">
            <div v-for="task in todos" :key="task.id" class="tasks">
                <ul class="tasks__content">
                    <li class="task">
                        <div class="task__body">
                            <button
                                class="task__completed"
                                :class="{ btnCompleted: task.completed }"
                                @click="task.completed = true"
                            ></button>
                            <div
                                class="task__title"
                                :class="{ completed: task.completed }"
                            >
                                {{ task.title }}
                            </div>
                        </div>
                        <div class="task__delete">
                            <trash-button
                                @click="$emit('remove', task)"
                            ></trash-button>
                        </div>
                    </li>
                </ul>
            </div>
        </TransitionGroup>
    </div>
    <empty-list v-else></empty-list>
</template>
<script>
export default {
    props: {
        todos: {
            type: Array,
            required: true,
        },
    },
    emits: ["remove"],
};
</script>
<style scoped>
.tasks {
    max-width: 1280px;
    margin: 0 auto;
}
.tasks__content {
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: relative;
}

.task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 5px;
    border: 2px solid #ccc;
    border-radius: 20px;
}
.task__body {
    display: flex;
    gap: 10px;
    align-items: center;
}
.task__completed {
    flex-shrink: 0;
    width: 25px;
    height: 25px;
    border: 1px solid black;
    border-radius: 50%;
    margin-right: 10px;
    padding: 1px;
}
.task__completed.btnCompleted {
    background-color: #6eeb83;
    border: 3px solid black;
}

.task__title {
    overflow-wrap: break-word;
    font-size: 24px;
    word-break: break-word;
    width: 100%;
    padding: 0px 5px;
}
.task__title::first-letter {
    text-transform: uppercase;
}
.task__title.completed {
    text-decoration: line-through;
    opacity: 0.8;
}

.task__delete {
    flex-shrink: 0;
    font-size: 18px;
    cursor: pointer;
}
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
