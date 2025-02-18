<template>
    <h1>Chiefs list</h1>
    <ul>
        <li 
            v-for="chief in chiefs" 
            :key="chief.id"
        >
        {{ chief.name }}
        <ButtonComponent :data="buttonData" @click="() => details(chief.id)"/>
        </li>
        
    </ul>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ButtonComponent from '../components/buttonComponent.vue';
import router from '../router';

interface Chief {
    id: number;
    name: string;
    infos: string;
}

const buttonData: { type: 'submit'; textContent: string } = {
    type: 'submit',
    textContent: 'Détails'
};

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

const details = (id: number) => {
    router.push(`/chiefs/${id}`);
};

onMounted(() => {
    fetchChiefs();
});
</script>