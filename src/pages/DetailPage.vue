<template>
    <div>
        <h1>{{ chief?.name }}</h1>
        <p>{{ chief?.infos }}</p>
        <h2>Plats</h2>
        <ul>
            <li v-for="dish in chief?.dishes" :key="dish.id">
                {{ dish.name }} - {{ dish.price }}€
                <button @click="addToCart(dish)">Ajouter au panier</button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '../store/cart-store';

interface Dish {
    id: number;
    name: string;
    price: number;
}

interface Chief {
    id: number;
    name: string;
    infos: string;
    dishes: Dish[];
}

const route = useRoute();
const chief = ref<Chief | null>(null);
const cartStore = useCartStore();

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

const addToCart = (dish: Dish) => {
    cartStore.addToCart(dish);
};

onMounted(() => {
    const id = Number(route.params.id);
    fetchChiefDetails(id);
});
</script>