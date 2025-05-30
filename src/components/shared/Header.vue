<template>
  <header class="bg-blue-500 mb-20">
    <nav class="mx-auto flex justify-between items-center px-12 py-8">
      <div class="logo">
        <RouterLink
          to="/"
          class="text-2xl font-sans text-white font-bold flex items-center gap-4"
        >
          <ChatBubbleBottomCenterTextIcon
            class="text-sm text-white w-16 h-16 hover:-translate-y-1 ease-in-out duration-300"
          />
          {{ brand }}
        </RouterLink>
      </div>
      <div>
        <RouterLink
          to="/create-template"
          class="flex items-center justify-center px-4 bg-blue-700 font-bold text-white hover:text-blue-800 w-48 py-3 rounded-md hover:bg-white hover:translate-x-1 ease-in-out duration-300"
        >
          {{ textBtn }}
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/vue/24/solid";
import { RouterLink } from "vue-router";

interface Props {
  brand: string;
  textBtn: string;
}

const { brand, textBtn } = defineProps<Props>();
</script>
