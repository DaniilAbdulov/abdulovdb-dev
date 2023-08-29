<template>
    <div v-if="todos.length">
        <TransitionGroup name="list" tag="ul">
            <div v-for="task in todos" :key="task.id" class="tasks">
                <ul class="tasks__content">
                    <li class="task">
                        <div class="task__body">
                            <input
                                type="checkbox"
                                :id="`task-${task.id}`"
                                name="tasks-group"
                                class="task__checkbox"
                                v-model="task.completed"
                            />
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
<style scoped lang="scss">
.tasks {
    max-width: 1280px;
    margin: 0 auto;
    &__content {
        list-style-type: none;
        margin: 0;
        padding: 0;
        position: relative;
    }
}

.task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 5px;
    border: 2px solid #ccc;
    border-radius: 20px;
    &__body {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    &__checkbox {
        flex-shrink: 0;
        width: 25px;
        height: 25px;
        margin-right: 10px;
        position: relative;
        appearance: none;
        border: 1px solid black;
        border-radius: 5px;
        &:checked {
            background-size: 100%;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='%23none' stroke='%23000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
        }
    }
    &__title {
        overflow-wrap: break-word;
        font-size: 24px;
        word-break: break-word;
        width: 100%;
        padding: 0px 5px;
    }
    &__title::first-letter {
        text-transform: uppercase;
    }
    &__title.completed {
        text-decoration: line-through;
        opacity: 0.8;
    }

    &__delete {
        flex-shrink: 0;
        font-size: 18px;
        cursor: pointer;
    }
}
@media (max-width: 767px) {
    .task {
        padding: 10px;
        margin-bottom: 5px;
        border: 2px solid #ccc;
        border-radius: 20px;
        &__body {
            gap: 5px;
        }
        &__checkbox {
            width: 20px;
            height: 20px;
            margin-right: 5px;
            border: 1px solid black;
        }
        &__title {
            font-size: 18px;
        }

        &__delete {
            font-size: 14px;
        }
    }
}
</style>
