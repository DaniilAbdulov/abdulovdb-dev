<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "social-button",
};
</script>

<style>
.btn {
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    border: 1px solid black;
}
</style>
