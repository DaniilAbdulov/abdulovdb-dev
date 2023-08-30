<template>
    <div class="about">
        <div class="about__content">
            <div class="about__title">
                <h1>About</h1>
            </div>
            <div class="about__body">
                <p>
                    This project is a small service that includes a gallery with
                    photos, a personal blog, and a to-do list. All data is
                    loaded via the jsonplaceholder service.
                </p>
                <p>
                    The gallery consists of several parts sorted by year, and
                    each year is associated with a userID. Each year has several
                    albums, and each album has photos that can be rated.
                </p>
                <p>
                    The personal blog consists of dynamically loaded posts when
                    the user scrolls to the end of the page. There are options
                    to add posts and search for them. Each post has likes and
                    comments. Clicking on comments will take the user to the
                    post page to view all comments and add new ones.
                </p>
                <p>
                    The to-do list has a simple interface and options to add,
                    search, mark as completed, and delete completed tasks.
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.about {
    min-height: 100vh;
    width: 100%;
    &__content {
    }
    &__title {
        font-weight: 700;
        font-size: 25px;
        margin-bottom: 20px;
    }
    &__body {
        font-size: 25px;
        line-height: 25px;
        letter-spacing: 1px;
        padding: 0px 15px;
    }
    &__body {
        p {
            text-indent: 40px;
            padding-left: -40px;
        }
    }
}
@media (max-width: 500px) {
    .about {
        margin-top: 80px;
        &__title {
            font-weight: 700;
            font-size: 20px;
            margin-bottom: 15px;
        }
        &__body {
            font-size: 18px;
            line-height: 18px;
            letter-spacing: 1px;
            padding: 0px 15px;
        }
        &__body {
            p {
                text-indent: 40px;
                padding-left: -40px;
            }
        }
    }
}
</style>
