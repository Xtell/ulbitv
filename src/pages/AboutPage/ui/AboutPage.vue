<template>
    <h1>About Page</h1>
    <Btn label="Я кнопка" />
</template>

<script lang="ts" >
import { defineComponent } from "vue";
import { Btn } from "@ui/index";
export default defineComponent({
    name: "AboutPage",
    components: {
        Btn
    }
})
</script>

<style scoped></style>