<template>
    <div class="like-button">
        <button>
            <div class="like-button__logo">
                <img src="@/assets/like.svg" alt="" />
            </div>
        </button>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "like-button",
};
</script>

<style>
.like-button {
    display: flex;
    align-items: center;
    gap: 5px;
}
.like-button__logo {
    width: 20px;
}
.like-button__logo img {
    object-fit: cover;
    width: 100%;
}
</style>
