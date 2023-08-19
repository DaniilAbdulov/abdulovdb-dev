<template>
    <div class="search">
        <div
            class="search__content"
            @mouseover="showSearch = true"
            @mouseleave="showSearch = false"
        >
            <Transition name="slide-fade">
                <div class="search__input" v-if="showSearch">
                    <input
                        type="text"
                        :value="modelValue"
                        @input="updateInput"
                        placeholder="search"
                    />
                </div>
            </Transition>
            <div class="search__logo">S</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showSearch: false,
            searchQuery: "",
        };
    },
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value);
        },
    },
};
</script>

<style>
.search {
    border: 1px solid black;
    border-radius: 20px;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
}
.search__content {
    display: flex;
    align-items: center;
    transition: all 0.5s ease-in;
}
.search__logo {
    margin: 0px 10px;
}
.slide-fade-enter-active {
    transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
}
.search__input input {
    border-radius: 10px;
    padding: 2px;
}
</style>
