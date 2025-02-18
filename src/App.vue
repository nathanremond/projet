<template>
  <HeaderLayout></HeaderLayout>
  <RouterView></RouterView>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderLayout from './layout/HeaderLayout.vue';

</script>