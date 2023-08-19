<template>
    <loading-block v-if="!dataIsLoaded"></loading-block>

    <div v-else>
        <router-link to="/gallery">Back to the Gallery</router-link>
        <div>---- {{ albumTitle }} ----</div>
        <div v-for="photo in photos" :key="photo.id">
            <div class="photo">
                <div class="photo__title">{{ photo.title }}</div>
                <div class="photo__image">
                    <img :src="photo.url" alt="" />
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
        async getPhotos() {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/photos?albumId=${this.albumId}`
                );
                if (!response.ok) {
                    throw new Error("Photos was not downloaded");
                } else {
                    this.photos = await response.json();
                    this.dataIsLoaded = true;
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

<style>
.photo {
    margin-bottom: 20px;
}
.photo__title {
    margin-bottom: 20px;
}
.photo__image {
    max-height: 200px;
    max-width: 400px;
}
.photo__image img {
    width: 100%;
    object-fit: cover;
}
</style>
