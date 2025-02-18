<template>
    <div>
        <h1>{{ chief?.name }}</h1>
        <p>{{ chief?.infos }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

interface Chief {
    id: number;
    name: string;
    infos: string;
}

const route = useRoute();
const chief = ref<Chief | null>(null);

const fetchChiefDetails = async (id: number) => {
    try {
        const response = await fetch('chiefs.json');
        if (!response.ok) {
            throw new Error('Failed to fetch chief details');
        }
        const data = await response.json();
        chief.value = data.find((c: Chief) => c.id === id) || null;
    } catch (error) {
        console.error(error);
    }
};

onMounted(() => {
    const id = Number(route.params.id);
    fetchChiefDetails(id);
});
</script>