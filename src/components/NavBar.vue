<template>
    <div class="navigation-wrapper">
        <div @click="$router.push('/')" class="logo-wrapper">
            <span class="stylish">AbdulovDB</span>
        </div>
        <ul class="navigation">
            <li class="parent">
                <button class="link" @click="$router.push('/about')">
                    About
                </button>
            </li>
            <li class="parent">
                <button class="link" @click="$router.push('/blog')">
                    Blog
                </button>
            </li>
            <li class="parent">
                <button class="link" @click="$router.push('/todo')">
                    ToDo
                </button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {};
</script>
<style>
.navigation-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #222;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
    color: white;
    text-transform: uppercase;
    overflow: hidden;
    width: 100%;
    margin-bottom: 40px;
}
.logo-wrapper {
    display: flex;
    cursor: pointer;
}
.stylish {
    font-weight: bold;
}
.navigation {
    display: flex;
    list-style-type: none;
}

.parent {
    padding: 0 10px;
    cursor: pointer;
}
.link {
    position: relative;
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;
    background: none;
    color: white;
}
</style>
