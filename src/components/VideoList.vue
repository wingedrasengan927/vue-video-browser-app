<template>
    <!-- The below statement means make an instance of VideoListItem
    for every video in videos -->
    <!-- Key Property is used whenever our list is updated.
    It enhances the performance of re-rendering.
    We generally use some kind of id of the record as the key property.
    The ID provided should be unique and consistent for the record. -->
    <ul
    class="list-group col-md-4">
        <VideoListItem 
        v-on:videoSelect="onVideoSelect"
        v-bind:video="video"
        v-for="video in videos"
        v-bind:key="video.etag"></VideoListItem>
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem'

export default {

/* We can validate the type of data we are receiving in props.
   If that's the case, the props should be an object with
   key - name of the prop and value - type */

    name: 'VideoList',
    components: {
        VideoListItem
    },
    props: {
        videos: Array
    },
    methods: {
        onVideoSelect(video) {
            return this.$emit('videoSelect', video);
        }
    }
}
</script>

<style>

</style>