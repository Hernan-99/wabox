<template>
  <!-- Footer con idioma y fecha -->
  <article
    class="p-3 bg-[#e2e8f0] border-t border-gray-200 text-xs text-gray-500 flex justify-between items-center w-full"
  >
    <span class="bg-[#edf2f7] px-2 py-1 rounded-md font-bold">{{ lang }}</span>
    <span class="font-bold">{{ date }}</span>
  </article>
</template>

<script lang="ts" setup>
interface Props {
  lang: string;
  date: string;
}
const { lang, date } = defineProps<Props>();
</script>

<style scoped></style>
