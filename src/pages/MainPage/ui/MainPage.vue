<template>
    <h1>MainPage</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "MainPage",
    props: {
        breadCrumbs: {
            type: Array,
            default: []
        }
    }
})
</script>

<style scoped></style>