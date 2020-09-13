<template>
    <!-- v-if looks at the data that was passed in, and
    renders the element only if the data is truthy -->
    <div v-if="video" class="col-md-8">
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" v-bind:src="videoURL" frameborder="0"></iframe>
        </div>
        <div class="details">
            <h4>{{ video.snippet.title }}</h4>
            <p>{{ video.snippet.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'videoDetail',
    props: ['video'],
    computed: {
        videoURL() {
            const { videoId } = this.video.id;
            return `https://www.youtube.com/embed/${videoId}`;
        }
    }
}

</script>

<style scoped>

.details {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

</style>