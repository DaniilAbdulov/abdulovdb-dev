<template>
    <div class="post">
        <div class="post__title"><span>Title:</span> {{ post.title }}</div>
        <div class="post__body"><span>Body:</span> {{ post.body }}</div>
        <div class="post__btns">
            <button class="delete">X</button>
        </div>
        <div class="post__social">
            <button @click="like++">Like</button>
            <div v-if="like > 0" class="like">{{ like }}</div>
            <button
                @click="
                    $router.push({
                        path: `/posts/${post.id}`,
                        query: { title: post.title, body: post.body },
                    })
                "
            >
                Comments
            </button>
            <div v-if="comment > 0" class="comment">{{ comment }}</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            like: 0,
            comment: 0,
        };
    },
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    methods: {},
};
</script>
<style>
.post {
    position: relative;
    border: 1px solid black;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 10px;
}
.post__title span,
.post__body span {
    font-weight: 700;
}
.post__body {
    margin-bottom: 10px;
}
.delete {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
}
.post__social {
    display: flex;
    gap: 5px;
}
</style>
