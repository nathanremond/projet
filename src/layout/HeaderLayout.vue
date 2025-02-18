<template>
    <header>
        <router-link to="/">
            <img src="/logo.jpg" alt="Logo HomeMade">
        </router-link>
        <nav>
            <a @click="toggleLoginState">
                {{getIsLoggingIn ? 'Inscription' : 'Connexion'}}
            </a>
            <a @click="Cart">Panier</a>
        </nav>
    </header>
</template>
<script setup lang="ts">
import router from '../router';
import { useAppStore } from '../store/user-store'
import { storeToRefs } from 'pinia';

const userStore = useAppStore()
const { getIsLoggingIn } = storeToRefs(userStore)

const toggleLoginState = () => {
    userStore.toggleLoginStateAndNavigate();
};

const Cart = () => {
    router.push('/cart');
};
</script>