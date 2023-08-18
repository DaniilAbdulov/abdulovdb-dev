<template>
    <div v-for="task in todos" :key="task.id">
        <div class="task">
            <div class="task__content">
                <button
                    class="task__completed"
                    :class="{ btnCompleted: task.completed }"
                    @click="task.completed = true"
                >
                    {{ task.completed }}
                </button>
                <div class="task__title" :class="{ completed: task.completed }">
                    {{ task.title }}
                </div>
            </div>
            <div class="task__delete">
                <button @click="$emit('remove', task)">-</button>
            </div>
        </div>
    </div>
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
<style>
.task {
    display: flex;
    justify-content: space-between;
}
.task__content {
    display: flex;
    gap: 5px;
}
.task__completed {
    color: red;
}
.completed {
    text-decoration: line-through;
}
.btnCompleted {
    color: green;
    font-weight: 700;
}
</style>
