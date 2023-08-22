<template>
    <div>
        <router-link class="routerLink" to="/gallery"
            ><back-button></back-button
        ></router-link>
        <div class="album__title">{{ albumTitle }}</div>
        <loading-block v-if="!dataIsLoaded"></loading-block>
        <div class="album__content" :class="{ dataIsLoaded: dataIsLoaded }">
            <div
                v-for="photo in photos"
                :key="photo.id"
                class="album__item photo"
            >
                <div class="photo__image">
                    <img :src="photo.url" @load="handleImageLoad" alt="" />
                </div>
                <div class="photo__label">
                    <like-button></like-button>
                    <p>{{ photo.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            photos: [],
            dataIsLoaded: false,
            imagesLoaded: 0,
            totalImages: 0,
        };
    },
    computed: {
        albumTitle() {
            return this.$route.query.title;
        },
        albumId() {
            return this.$route.params.id;
        },
    },
    methods: {
        handleImageLoad() {
            this.imagesLoaded++;
            if (this.imagesLoaded + 1 == this.totalImages) {
                this.dataIsLoaded = true;
            }
        },
        async getPhotos() {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/photos?albumId=${this.albumId}`
                );
                if (!response.ok) {
                    throw new Error("Photos was not downloaded");
                } else {
                    this.photos = await response.json();
                    this.totalImages = this.photos.length;
                    // console.log(response);
                    // this.dataIsLoaded = true;
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.getPhotos();
    },
};
</script>

<style scoped>
.album__content {
    /* background: black; */
    display: none;
    transition: all 0.3s ease-in;
}
.album__content.dataIsLoaded {
    /* background: red; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    transition: all 0.3s ease-in;
}
.album__title {
    font-size: 50px;
    margin-bottom: 20px;
}
@media (max-width: 767px) {
    .album__title {
        font-size: 30px;
        margin-bottom: 10px;
    }
}
.album__title::first-letter {
    text-transform: uppercase;
}
.album__item {
    border-radius: 10px;
    box-shadow: 0px 0px 2px 2px black;
    margin: 20px;
    max-width: 500px;
    transition: all 0.2s ease-in;
    cursor: pointer;
}
.album__item:hover {
    box-shadow: 0px 0px 5px 5px black;
}
.photo__image {
}
.photo__image img {
    border-radius: 10px 10px 0px 0px;
    width: 100%;
    object-fit: cover;
}
.photo__label {
    text-align: right;
    font-size: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}
</style>
