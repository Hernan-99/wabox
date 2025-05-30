<script setup lang="ts">
interface Props {
  port: number;
}

const { port = 3000 } = defineProps<Props>();
</script>

<template>
  <h1 class="text-3xl font-bold">Frontend is running in port {{ port }}!</h1>
</template>

<style scoped></style>
