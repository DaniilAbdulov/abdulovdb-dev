<template>
    <button class="create-button">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "create-button",
};
</script>

<style>
.create-button {
    border-radius: 50%;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    border: 1px solid black;
}
</style>
