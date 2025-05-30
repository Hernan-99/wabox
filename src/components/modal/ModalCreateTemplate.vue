<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white rounded-lg p-6 max-w-md w-full">
      <h2 class="text-xl font-bold mb-4">Template creado con éxito</h2>

      <!-- Usamos tu componente CardItem -->
      <CardItem :template="templateData" class="mb-4" />

      <button
        @click="$emit('close')"
        class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Cerrar
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardItem from "../card/CardItem.vue";
import type { Template } from "../../types/types";

interface Props {
  templateData: Template;
}

const { templateData } = defineProps<Props>();

defineEmits(["close"]);
</script>
