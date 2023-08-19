<template>
    <div>
        <div v-for="(album, i) in albums" :key="i" class="general">
            <div class="album-title">{{ years[album[0].userId] }}</div>
            <div v-for="al in album" :key="al.id" class="sub">
                <button @click="showPhotosInAlbum(al)">
                    {{ al.title }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            albums: {},
            years: [
                0, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014,
            ],
        };
    },
    methods: {
        showPhotosInAlbum(value) {
            this.$router.push({
                path: `/gallery/${value.id}`,
                query: { title: value.title },
            });
        },

        async getAlbums() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/albums"
                );
                if (!response.ok) {
                    throw new Error("Albums was not downloaded");
                } else {
                    const albumsData = await response.json();
                    this.albums = albumsData.reduce((acc, album) => {
                        if (!acc[album.userId]) {
                            acc[album.userId] = [];
                        }
                        acc[album.userId].push(album);

                        return acc;
                    }, {});
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.getAlbums();
    },
};
</script>

<style>
.general {
    border: 1px solid red;
    margin-bottom: 20px;
}
.sub {
    border: 1px solid black;
}
.album-title {
    font-size: 30px;
    font-weight: bold;
}
</style>
