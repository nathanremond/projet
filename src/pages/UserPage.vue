<template>
    <h1>User</h1>
    <FormsComponent 
        :data="formData" 
        @submit.prevent="handleSubmit"
    ></FormsComponent>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import FormsComponent from '../components/FormsComponent.vue';
import { useAppStore } from '../store/user-store'
import { storeToRefs } from 'pinia';
import router from '../router';

const userStore = useAppStore()
const { getIsLoggingIn } = storeToRefs(userStore)

watch(getIsLoggingIn, (val) => {
    if(val == true){
        formData.value.fields = [
            {
                id: 'email',
                type: 'email',
                placeholder: 'Entrez votre email',
                value: ''
            },
            {
                id: 'password',
                type: 'password',
                placeholder: 'Entrez votre mot de passe',
                value: ''
            }
        ]
        formData.value.buttons[0].textContent = 'Se connecter';
    } else {
        formData.value.fields = [
            {
                id: 'email',
                type: 'email',
                placeholder: 'Entrez votre email',
                value: ''
            },
            {
                id: 'password',
                type: 'password',
                placeholder: 'Entrez votre mot de passe',
                value: ''
            },
            {
                id: 'confirmed-password',
                type: 'password',
                placeholder: 'Confirmez votre mot de passe',
                value: ''
            }
        ]
        formData.value.buttons[0].textContent = 'S\'inscrire';
    }
})

const formData = ref({
    fields: [
        {
            id: 'email',
            type: 'email',
            placeholder: 'Entrez votre email',
            value: ''
        },
        {
            id: 'password',
            type: 'password',
            placeholder: 'Entrez votre mot de passe',
            value: ''
        }
    ],
    buttons: [
        {
            type: 'submit',
            textContent: 'Se connecter'
        },
        {
            type: 'reset',
            textContent: 'Réinitialiser'
        }
    ]
})

const handleSubmit = async () => {
    const result = await fetch('users.json')
    const users = await result.json()

    const emailField = formData.value.fields.find(field => field.id === 'email');
    const passwordField = formData.value.fields.find(field => field.id === 'password');

    const email = emailField ? emailField.value : '';
    const password = passwordField ? passwordField.value : '';

    const user = users.find((user) => user.email == email)
    if(!user){
        alert('Utilisateur non trouvé')
        return
    }
    if(!(user.password == password)){
        alert('Mot de passe incorrect')
        return
    }
    router.push('session/' + user.id)
}
</script>