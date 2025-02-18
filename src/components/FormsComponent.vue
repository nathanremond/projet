<template>
    <form>
        <section v-for="field in data.fields">
            <label :for="field.id"></label>
            <input 
                :id="field.id"
                :type="field.type" 
                :placeholder="field.placeholder" 
                v-model="field.value"
                required
            >
        </section>
        <section v-for="button in data.buttons">
            <button 
                :type="button.type"
            > {{ button.textContent }}
            </button>
        </section>
    </form>
</template>
<script setup lang="ts">

interface FormsComponentProps {
    data: {
        fields: Array,
        buttons: Array
    }
}

defineProps<FormsComponentProps>()
</script>