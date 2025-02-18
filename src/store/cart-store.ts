import { defineStore } from 'pinia';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

interface Dish {
    id: number;
    name: string;
    price: number;
}

interface CartItem {
    cartId: string;
    dish: Dish;
}

export const useCartStore = defineStore('cartStore', () => {
    const cart = ref<CartItem[]>([]);

    const addToCart = (dish: Dish) => {
        cart.value.push({ cartId: uuidv4(), dish });
    };

    const removeFromCart = (cartId: string) => {
        cart.value = cart.value.filter(item => item.cartId !== cartId);
    };

    return {
        cart,
        addToCart,
        removeFromCart
    };
});