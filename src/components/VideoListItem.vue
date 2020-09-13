<template>
    <li class="list-group-item media"
        v-bind:class="{ 'active': hovered }"
        v-on:mouseover="hovered=true"
        v-on:mouseleave="hovered=false"
        v-on:click="onVideoSelect">
      <img class="mr-3" v-bind:src="thumbnailURL" alt="Generic placeholder image">
      <div class="media-body">
        <h5 class="mt-0 mb-1"> {{ video.snippet.title }}</h5>
      </div>
    </li>
</template>

<script>

export default {
    name: 'VideoListItem',
    props: ['video'],
    data() {
      return {
        hovered: false
      }
    },
    computed: { // computed properties can also be used with props.
      thumbnailURL() {
        return this.video.snippet.thumbnails.default.url
      }
    },
    methods: {
      onVideoSelect() {
        this.$emit("videoSelect", this.video);
      }
    }
}
</script>

<style scoped>
  li {
    display: flex;
    cursor: pointer;
  }

  h5 {
    font-size: 0.9em;
  }
</style>