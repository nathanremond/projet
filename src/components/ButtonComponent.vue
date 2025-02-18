<template>
    <button 
        :type=data.type
    > {{ data.textContent}}
    </button>
</template>
<script setup lang="ts">

interface ButtonsComponentProps {
    data: {
        type: 'submit',
        textContent: string
    }
}

defineProps<ButtonsComponentProps>()
</script>