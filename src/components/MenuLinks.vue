<template>
    <div
        class="navigation-wrapper"
        :class="{ 'navigation-wrapper-active': burgerActive }"
    >
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
                <button class="link" @click="$router.push('/gallery')">
                    Gallery
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
            <li class="parent">
                <button class="burger-menu" @click="burgerActive = true">
                    <img src="@/assets/burger-menu.svg" alt="" />
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            burgerActive: false,
        };
    },
};
</script>

<style>
.navigation-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #222;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
    color: rgb(253, 252, 252);
    text-transform: uppercase;
    overflow: hidden;
    width: 100%;
    margin-bottom: 40px;
    font-size: 20px;
}
.logo-wrapper {
    display: flex;
    cursor: pointer;
}
.stylish {
    font-weight: bold;
}
.navigation {
    position: absolute;
    top: 62.4px;
    left: 0px;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    align-items: flex-start;
    background: #222;
    padding: 15px;
    width: 100%;
}

.parent {
    padding: 0 10px;
    cursor: pointer;
}
.link {
    transition: all 0.3s ease-in-out;
    color: rgb(253, 252, 252);
    margin-bottom: 10px;
}

.burger-menu {
    max-width: 30px;
}
.burger-menu img {
    width: 100%;
    object-fit: cover;
}

/* .navigation-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #222;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
    color: rgb(253, 252, 252);
    text-transform: uppercase;
    overflow: hidden;
    width: 100%;
    margin-bottom: 40px;
    font-size: 20px;
}
/*
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
    align-items: center;
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

.burger-menu {
    max-width: 30px;
}
.burger-menu img {
    width: 100%;
    object-fit: cover;
} */
</style>
