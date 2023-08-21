<template>
    <loading-block v-if="!dataIsLoaded"></loading-block>
    <div v-else>
        <div v-for="(album, i) in albums" :key="i" class="general">
            <div class="general__year">{{ years[album[0].userId] }}</div>
            <div class="general__albums albums">
                <div class="albums__container">
                    <div
                        class="albums__row"
                        v-for="(albumRow, j) in createAlbumRows(album)"
                        :key="`row-${j}`"
                    >
                        <div
                            v-for="(al, k) in albumRow"
                            :key="`album-${k}`"
                            class="general__album albums__item"
                        >
                            <button @click="showPhotosInAlbum(al)">
                                {{ al.title }}
                            </button>
                        </div>
                    </div>
                </div>
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
            dataIsLoaded: false,
        };
    },
    methods: {
        createAlbumRows(album) {
            const albumMatrix = [];
            const cols = 2;
            const rows = 5;

            for (let i = 0, x = 0; i < rows; i++) {
                albumMatrix[i] = [];
                for (let j = 0; j < cols && x < album.length; j++, x++) {
                    albumMatrix[i].push(album[x]);
                }
            }

            return albumMatrix;
        },

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
                    this.dataIsLoaded = true;
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
    border: 10px solid red;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}
.general__year {
    font-size: 30px;
    font-weight: bold;
}
.albums {
    padding: 10px;
    border: 1px solid black;
}
.albums__container {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
}
.albums__row {
}
.albums__item {
    border: 2px solid pink;
}
</style>
