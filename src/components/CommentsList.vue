<template>
    <div>
        <div
            v-for="com in filteredComments"
            :key="com.id"
            class="post__comment comment"
        >
            <div class="comment">
                <div class="comment__email">{{ com.email }}:</div>
                <div class="comment__name">{{ com.name }}</div>
                <div class="comment__body">{{ com.body }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        comments: {
            type: Array,
            required: true,
            default: () => [],
        },
        postId: {
            type: Number,
            required: true,
        },
    },
    computed: {
        filteredComments() {
            if (!this.comments) return [];
            return this.comments.filter(
                (comment) => comment.postId === this.postId
            );
        },
    },
};
</script>
<style>
.comment {
    padding: 5px;
}
.comment__name {
    font-weight: 700;
    &::first-letter {
        text-transform: capitalize;
    }
}
.comment__email {
}
.comment__body {
}
</style>
