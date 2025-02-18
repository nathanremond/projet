<template>
    <div>
        <h1>Panier</h1>
        <ul>
            <li v-for="item in cart" :key="item.cartId">
                {{ item.dish.name }} - {{ item.dish.price }}€
                <button @click="removeFromCart(item.cartId)">Supprimer</button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCartStore } from '../store/cart-store';

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const removeFromCart = (cartId: string) => {
    cartStore.removeFromCart(cartId);
};
</script>