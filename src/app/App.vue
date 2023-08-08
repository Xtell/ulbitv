<template>
    <h1>My App</h1>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
</template>
<script>

import {defineComponent} from "vue";

export default defineComponent({
    name: "App"
})
</script>

<style scoped>

</style>