<template>
    <button class="back-button">
        <div class="back-button__logo">
            <img src="@/assets/back.svg" alt="" srcset="" />
        </div>
        <slot>Back</slot>
    </button>
</template>
<script>
export default {
    name: "back-button",
};
</script>

<style>
.back-button {
    align-self: flex-end;
    padding: 5px 10px;
    background: none;
    display: flex;
    align-items: center;
    color: black;
}
.back-button__logo {
    max-width: 25px;
    margin-right: 10px;
}
.back-button__logo img {
    object-fit: cover;
    width: 100%;
}
</style>
