<template>
    <div
        class="navigation-wrapper"
        :class="{ 'navigation-wrapper-burger': burgerActive }"
    >
        <div @click="$router.push('/')" class="logo-wrapper">
            <span class="stylish">AbdulovDB</span>
        </div>
        <ul class="navigation" :class="{ 'navigation-burger': burgerActive }">
            <li class="parent" v-for="(link, index) in links" :key="index">
                <router-link
                    :to="link.route"
                    class="link"
                    :class="{ 'link-burger': burgerActive }"
                    @click="burgerActive = false"
                >
                    {{ link.label }}
                </router-link>
            </li>
        </ul>
        <button class="burger-menu" @click="toggleBurgerMenu">
            <img src="@/assets/burger-menu.svg" alt="" />
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            burgerActive: false,
            links: [
                { label: "About", route: "/about" },
                { label: "Gallery", route: "/gallery" },
                { label: "Blog", route: "/blog" },
                { label: "ToDo", route: "/todo" },
            ],
        };
    },
    methods: {
        toggleBurgerMenu() {
            this.burgerActive = !this.burgerActive;
        },
    },
};
</script>

<style lang="scss">
.navigation-wrapper {
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
    height: 60px;
    &-burger {
        overflow: visible;
    }
}
@media (max-width: 500px) {
    .navigation-wrapper {
        position: fixed;
        z-index: 100;
        top: 0;
    }
}
.navigation {
    display: flex;
    list-style-type: none;
    align-items: center;
    transition: all 0.3s ease-in;
    &-burger {
        position: absolute;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
        top: 60px;
        left: 0px;
        background: #222;
        width: 100%;
    }
}
.link {
    position: relative;
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in;
    background: none;
    color: white;
    text-decoration: none;
    text-transform: capitalize;
    &-burger {
        transition: all 0.3s ease-in;
        margin-bottom: 10px;
        margin-left: 10px;
    }
}

.logo-wrapper {
    display: flex;
    cursor: pointer;
}
.stylish {
    font-weight: bold;
}

.parent {
    padding: 0 10px;
    cursor: pointer;

    display: inline-block;
}

.burger-menu {
    display: none;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    max-width: 30px;
}
@media (max-width: 500px) {
    .parent {
        display: none;
    }
    .burger-menu {
        display: block;
    }
    .navigation-burger .parent {
        display: block;
    }
}
.burger-menu img {
    width: 100%;
    object-fit: cover;
}
</style>
