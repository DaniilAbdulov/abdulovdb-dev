<template>
    <div class="general-page">
        <div class="general__content">
            <div class="general__title">
                <h1>
                    Hello. My name is Daniil Abdulov and welcome to my first
                    pet-project.
                </h1>
                <h2>
                    Please, go to the
                    <a class="general__link" href="/about">About</a> section for
                    more information
                </h2>
            </div>
            <div class="general__body">
                <div class="general__image">
                    <img src="@/assets/abdulovdb.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.general-page {
    min-height: 100vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.general__content {
}
.general__title h1,
h2 {
    margin-bottom: 10px;
}
.general__body {
}
.general__image {
    max-width: 400px;
    margin: 0 auto;
}
.general__image img {
    border-radius: 50%;
    width: 100%;
    object-fit: cover;
}
.general__link {
    color: black;
    font-weight: 700;
}
</style>
