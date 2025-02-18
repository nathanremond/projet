<template>
    <h1>Chiefs list</h1>
    <ul>
        <li v-for="chief in chiefs" :key="chief.id">{{ chief.name }}</li>
    </ul>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Chief {
    id: number;
    name: string;
}

const chiefs = ref<Chief[]>([]);

const fetchChiefs = async () => {
    try {
        const response = await fetch('chiefs.json');
        if (!response.ok) {
            throw new Error('Failed to fetch chiefs');
        }
        const data = await response.json();
        chiefs.value = data;
    } catch (error) {
        console.error(error);
    }
};

onMounted(() => {
    fetchChiefs();
});
</script>