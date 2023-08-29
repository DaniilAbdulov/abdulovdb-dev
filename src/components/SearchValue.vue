<template>
    <div class="search">
        <div
            class="search__content"
            @mouseover="showInput = true"
            @mouseleave="showInput = false"
        >
            <Transition name="slide-fade">
                <div class="search__input" v-if="showInput">
                    <input
                        type="text"
                        :value="modelValue"
                        @input="updateInput"
                        placeholder="search"
                        required
                    />
                </div>
            </Transition>
            <div class="search__logo">
                <img src="@/assets/search.svg" alt="" srcset="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showInput: false,
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

<style lang="scss">
.search {
    border: 1px solid black;
    border-radius: 20px;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    &__content {
        display: flex;
        align-items: center;
        transition: all 0.5s ease-in;
    }
    &__logo {
        flex-shrink: 0;
        margin: 0px 10px;
        width: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__logo img {
        object-fit: cover;
        width: 100%;
    }
    &__input input {
        border-radius: 10px;
        padding: 2px;
    }
}
@media (max-width: 424px) {
    .search {
        border: 1px solid black;
        border-radius: 20px;
        min-height: 40px;
        padding: 5px;
        &__logo {
            margin: 0px 10px;
            width: 10px;
        }
        &__input input {
            max-width: 100px;
        }
    }
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
</style>
