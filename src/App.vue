<template>
<!-- The Template root requires exactly one element -->
    <div class="container">
        <!-- Each Tag represents an Instance of the Component -->
        <SearchBar v-on:searchTerm="onSearch"></SearchBar>
        <div class="row">
            <videoDetail v-bind:video="selectedVideo"></videoDetail>
            <VideoList
            v-on:videoSelect="onVideoSelect"
            v-bind:videos="videos"></VideoList>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import videoDetail from './components/videoDetail'

const YoutubeAPIKey = process.env.VUE_APP_YOUTUBE_KEY;

// -------- NOTES --------

/* Informataion can be easily communicated between up and down components
   (between parent and children components)
   Information cannot be easily communicated between sibling components */

/* Communicate from parent to child by passing props,
   Communicate from child to parent by emitting events*/

/* 'data' property in Vue Component vs Vue Instance:
   Vue Component: data must be function that returns an object.
   Vue Instance: data can be an object or a function.
   The Reason is to have a seperate data object for each instance created*/

/* The default Object contains some properties that customize
   this Vue Component and how it behaves. */

/* If the data property is updated, the component will
   automatically re-render itself. */

/* Steps for passing props:
   1. Add the prop to the child component's tag in the parent template with a v-bind directive.
   2. Tell the child component about the props it should expect to get. */

/* v-bind directive means that any time the passed data property is updated inside parent,
   It should automatically re-render the child component with the new data. */

/* Note that we don't need to specify the 'el' property in the default object,
    as Vue automatically looks for the template in the file */

export default {

    name: 'App', // providing the name property makes debugging easier
    components: { // nesting other components
        SearchBar,
        VideoList,
        videoDetail
    },
    data() {
        return {
            videos: [],
            selectedVideo: null
        }
    },
    methods: {
        onVideoSelect(video) {
            this.selectedVideo = video;
        },
        onSearch(searchTerm) {
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: YoutubeAPIKey,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            })
            .then(response => {
                this.videos = response.data.items;
            })
        }
    }
}
</script>