<template>
  <div class="mb-8 gap-2 py-4 px-2 shadow shadow-slate-300 rounded-md">
    <h3 class="text-xl font-semibold mb-4">
      Message header
      <span
        class="bg-slate-300 inline py-1 px-2 text-slate-500 font-bold text-[12px] rounded-md"
      >
        optional
      </span>
    </h3>
    <div class="container-radio-btns flex items-center gap-4 mb-8">
      <div>
        <label class="text-slate-600 font-medium" for="default" checked
          >None</label
        >
        <input
          v-model="headerType"
          value="none"
          class="m-2"
          type="radio"
          id="default"
          name="headerType"
        />
      </div>
      <div>
        <label class="text-slate-600 font-medium" for="text">Text</label>
        <input
          v-model="headerType"
          value="text"
          class="m-2"
          type="radio"
          id="text"
          name="headerType"
        />
      </div>
    </div>
    <div v-if="headerType === 'text'">
      <input
        v-model="messageHeader"
        type="text"
        class="w-full border border-bg-[rgba(0,0,0,0.5)] px-2 py-2 outline-none focus:border-blue-500 focus:shadow focus:shadow-blue-500 rounded-md"
        placeholder="Next to Wabox?"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const messageHeader = ref("");
const headerType = ref("none"); // 'none' o 'text'
</script>
