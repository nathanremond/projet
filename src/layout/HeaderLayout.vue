<template>
    <header>
        <a href="">
            <img src="/logo.jpg" alt="Logo HomeMade">
        </a>
        <nav>
            <a @click="toggleLoginState">
                {{getIsLoggingIn ? 'Inscription' : 'Connexion'}}
            </a>
        </nav>
    </header>
</template>
<script setup lang="ts">
import { useAppStore } from '../store/user-store'
import { storeToRefs } from 'pinia';

const userStore = useAppStore()
const { getIsLoggingIn } = storeToRefs(userStore)

const toggleLoginState = () => {
    userStore.toggleLoginStateAndNavigate();
};
</script>