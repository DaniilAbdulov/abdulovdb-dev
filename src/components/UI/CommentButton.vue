<template>
    <div class="comment-button">
        <button>
            <div class="comment-button__logo">
                <img src="@/assets/comment.svg" alt="comment" />
            </div>
        </button>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "comment-button",
};
</script>

<style>
.comment-button {
    display: flex;
    align-items: center;
    gap: 5px;
}
.comment-button__logo {
    max-width: 25px;
}
.comment-button__logo img {
    object-fit: cover;
    width: 100%;
}
</style>
