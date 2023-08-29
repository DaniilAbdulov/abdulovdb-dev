<template>
    <div v-if="comments.length != 0">
        <ul class="comments">
            <TransitionGroup name="list">
                <li v-for="com in comments" :key="com.id" class="comment">
                    <div class="comment__author">
                        {{ com.email }}
                    </div>
                    <div class="comment__content">
                        <div class="comment__body">{{ com.body }}</div>
                        <div class="comment__dlc">
                            <div class="comment__time">
                                {{ com.time }}
                            </div>
                            <div class="comment__delete">
                                <trash-button
                                    @click="$emit('remove', com)"
                                ></trash-button>
                            </div>
                        </div>
                    </div>
                </li>
            </TransitionGroup>
        </ul>
    </div>
    <empty-list v-else></empty-list>
</template>

<script>
import EmptyList from "./UI/EmptyList.vue";
export default {
    components: { EmptyList },
    props: {
        comments: {
            type: Array,
            reqired: true,
        },
    },
    emits: ["remove"],
};
</script>

<style lang="scss">
.comments {
    margin-top: 20px;
    margin-bottom: 15px;
    padding: 10px;
    box-shadow: 1px 1px 1px 1px black;
    border-radius: 10px;
    position: relative;
}
.comment {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    justify-content: center;
    &__author {
        font-size: 15px;
        writing-mode: vertical-lr;

        transform: rotate(-180deg);
    }
    &__content {
        display: flex;
        flex-direction: column;
        flex: 0 1 90%;
        justify-content: space-between;
        border-bottom: 2px solid black;
    }
    &__body {
        font-size: 20px;
        margin-bottom: 10px;
        overflow-wrap: break-word;
    }
    &__body::first-letter {
        text-transform: uppercase;
    }
    &__dlc {
        display: flex;
        justify-content: space-between;
    }
    &__time {
        font-style: italic;
    }
}
@media (max-width: 767px) {
    .comment {
        &__author {
            font-size: 12px;
        }
        &__body {
            font-size: 18px;
            margin-bottom: 5px;
        }
        &__time {
            font-size: 14px;
        }
    }
}
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
