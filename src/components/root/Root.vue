<script>
export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>

<template>
    <div class="app">
        <div>
            <router-link to="/">Main</router-link>
        </div>
        <div>
            <router-link to="/about">AboutPage</router-link>
        </div>

        <router-view></router-view>
    </div>
</template>