<template>
    <main>
        <h1>Session page</h1>
    </main>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

onMounted(() => {
    const route = useRoute()
    console.log(route.params)
})
</script>