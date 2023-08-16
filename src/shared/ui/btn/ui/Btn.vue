<template>
    <button>{{ label }}</button>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

defineProps({
    label: String,
})

onMounted(() => {
    console.debug("i'm mounted")
})
</script>

<style scoped></style>