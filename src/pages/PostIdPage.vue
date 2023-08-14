<template>
    <div class="posts">
        <div class="post">
            <div class="post__title">
                <span>Title:</span> {{ $route.query.title }}
            </div>
            <div class="post__body">
                <span>Body:</span> {{ $route.query.body }}
            </div>
        </div>
        <div class="post__comment comment">Comments:</div>
    </div>
</template>
<script>
export default {};
</script>
<style></style>
