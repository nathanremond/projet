import { defineStore } from "pinia";
import { computed, onMounted, onUnmounted, ref } from "vue";
import router from "../router";


export const useAppStore = defineStore('userStore', () => {

    onMounted(() => {
        console.log('user-store has mounted')
    })

    onUnmounted(() => {
        console.log('user-store has unmounted')
    })

    const isLoggingIn = ref(true)

    const getIsLoggingIn = computed(() => isLoggingIn.value)

    function setIsLoggingIn(val: boolean) {
        isLoggingIn.value = val
    }

    function toggleLoginStateAndNavigate() {
        setIsLoggingIn(!isLoggingIn.value);
        if (router.currentRoute.value.path !== '/user') {
            router.push('/user');
        }
    }

    return {
        getIsLoggingIn,
        setIsLoggingIn,
        toggleLoginStateAndNavigate
    }
})