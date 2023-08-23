<template>
    <div class="comments">
        <TransitionGroup name="list">
            <div v-for="com in comments" :key="com.id" class="comment">
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
                                @click="$emit('remove', com.id)"
                            ></trash-button>
                        </div>
                    </div>
                </div>
            </div>
        </TransitionGroup>
    </div>
</template>

<script>
export default {
    props: {
        comments: {
            type: Array,
            reqired: true,
        },
    },
    emits: ["remove"],
};
</script>

<style>
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
}
.comment__author {
    font-size: 15px;
    writing-mode: vertical-lr;

    transform: rotate(-180deg);
}
.comment__content {
    display: flex;
    flex-direction: column;
    flex: 0 1 90%;
    justify-content: space-between;
    border-bottom: 2px solid black;
}
.comment__body {
    font-size: 20px;
    margin-bottom: 10px;
    overflow-wrap: break-word;
}
.comment__body::first-letter {
    text-transform: uppercase;
}
.comment__dlc {
    display: flex;
    justify-content: space-between;
}
.comment__time {
    font-style: italic;
}
.comment__delete {
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
