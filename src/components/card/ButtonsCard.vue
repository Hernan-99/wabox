<template>
  <div class="flex flex-col gap-2 mt-2">
    <button
      class="text-blue-500 pointer text-md font-medium px-3 py-[14px] border-[rgba(110,110,110,0.1)] border-t-2 border-b-2"
      v-for="(button, index) in showBtns"
      :key="index"
    >
      {{ button.text }}
    </button>

    <!-- Emit -->
    <button
      class="text-blue-500 pointer text-md font-medium px-3 py-[14px] border-[rgba(110,110,110,0.1)] border-t-2 border-b-2"
      @click="$emit('showAllBtns')"
      v-if="!IsVisible && buttons.length > 2"
    >
      Explorar más
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { TemplateButton } from "../../types/types";

interface Props {
  buttons: TemplateButton[];
  IsVisible: boolean;
}

const { buttons, IsVisible } = defineProps<Props>();

// Muestra 3 botones (3--> explorar mas)
const showBtns = computed(() => {
  return IsVisible ? buttons : buttons.slice(0, 2);
});
</script>
