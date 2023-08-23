<template>
    <TransitionGroup name="list" tag="ul">
        <div v-for="task in todos" :key="task.id">
            <div class="tasks">
                <ul class="tasks__content">
                    <li class="task">
                        <div class="task__body">
                            <button
                                class="task__completed"
                                :class="{ btnCompleted: task.completed }"
                                @click="task.completed = true"
                            >
                                {{ task.completed }}
                            </button>
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
        </div>
    </TransitionGroup>
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
}

.task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    margin-bottom: 5px;
    border-bottom: 1px solid #ccc;
}
.task__body {
    display: flex;
    gap: 10px;
    align-items: center;
}
.task__completed {
    font-size: 16px;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: none;
    margin-right: 10px;
}
.task__completed.btnCompleted {
    text-decoration: line-through;
}

.task__title {
    word-wrap: normal;
    font-size: 24px;
}
.task__title.completed {
    text-decoration: line-through;
    opacity: 0.6;
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
