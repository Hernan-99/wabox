<template>
  <footer class="bg-blue-500 py-8">
    <p class="text-center text-xl text-white">{{ copy }}</p>
  </footer>
</template>

<script lang="ts" setup>
interface Props {
  copy: string;
}

const { copy } = defineProps<Props>();
</script>
