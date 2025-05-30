<template>
  <article
    class="p-4 border-b flex justify-between items-center border-gray-200 bg-[#e2e8f0]"
  >
    <div class="max-w-[40%]">
      <h3 class="text-md font-semibold truncate">{{ title }}</h3>
      <div class="flex gap-1 items-center mt-2 text-sm">
        <span
          class="px-2 py-1 font-bold rounded-full text-xs capitalize"
          :class="statusStyles"
        >
          {{ formatStatus }}
        </span>
        <span class="text-gray-500 truncate max-w-[45px]">{{ formatCat }}</span>
      </div>
    </div>

    <div>
      <div class="flex items-center justify-center gap-1">
        <button
          class="bg-white border border-[rgba(0,0,0,0.18)] border-black px-5 rounded-[4px]"
        >
          view
        </button>
        <button
          class="flex flex-col items-center gap-[2px] bg-white border border-[rgba(0,0,0,0.18)] border-black px-2 py-[0.25rem] rounded-[4px]"
        >
          <div class="rounded-full w-[4px] h-[4px] bg-black"></div>
          <div class="rounded-full w-[4px] h-[4px] bg-black"></div>
          <div class="rounded-full w-[4px] h-[4px] bg-black"></div>
        </button>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { computed } from "vue";

interface Props {
  title: string;
  status: string;
  category: string;
}

const { title, status, category } = defineProps<Props>();

// Formateo de status, primera letra en mayusc
const formatStatus = computed(() => {
  const statusMap: Record<string, string> = {
    draft: "Draft",
    active: "Active",
    pending: "Pending",
    rejected: "Rejected",
  };
  return statusMap[status.toLowerCase()] || status;
});

// Estilos según estado
const statusStyles = computed(() => {
  status.toLowerCase();
  return {
    "bg-blue-100 text-blue-500": status === "draft",
    "bg-green-100 text-green-500": status === "active",
    "bg-yellow-100 text-yellow-500": status === "PENDING",
    "bg-red-100 text-red-500": status === "rejected",
  };
});

// Formateo de cat, cat en mayusc
const formatCat = computed(() => {
  return category.toLocaleUpperCase().split("_").join(" ");
});
</script>

<style scoped></style>
