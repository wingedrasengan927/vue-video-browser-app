<template>
    <div>
        <input v-on:keyup.enter="onInput" type="text">
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        onInput(event) {
            this.$emit('searchTerm', event.target.value)
            /* Note that adding a $ sign doesn't make the function different,
            it's just plain javascript */
        }
    }
}
</script>

<style scoped>
/* Adding 'scoped' makes sure that the CSS is limited to this component only */
input {
    width: 75%;
}

div {
    text-align: center;
    margin: 20px;
    margin-top: 40px;
}

</style>