<template>
    <div class="trash-button">
        <button>
            <div class="trash-button__logo">
                <img src="@/assets/trash.svg" alt="trash" />
            </div>
        </button>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "trash-button",
};
</script>

<style>
.trash-button {
    display: flex;
    align-items: center;
    gap: 5px;
}
.trash-button__logo {
    max-width: 25px;
}
.trash-button__logo img {
    object-fit: cover;
    width: 100%;
}
</style>
