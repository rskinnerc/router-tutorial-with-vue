<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <main>
    <TheWelcome />
    <RouterView />
  </main>
</template>
