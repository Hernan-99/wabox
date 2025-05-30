<template>
  <div class="mb-8 gap-2 py-8 px-2 shadow shadow-slate-300 rounded-md">
    <!-- BODY -->
    <div class="ipt-group mb-20">
      <h3 class="text-xl font-semibold mb-4">Message body</h3>
      <textarea
        v-model="messageBody"
        class="resize-none h-[150px] w-full border border-bg-[rgba(0,0,0,0.5)] px-2 py-2 outline-none focus:border-blue-500 focus:shadow focus:shadow-blue-500 rounded-md"
        placeholder="Hi '{{Name}}'!👋. The awesome products😍 from {{Brand_Name}} are waiting to be yours! Get your products here👇"
        required
      ></textarea>
    </div>
    <!-- FOOTER -->
    <div class="ipt-group">
      <h3 class="text-xl font-semibold mb-4">
        Message footer
        <span
          class="bg-slate-300 inline py-1 px-2 text-slate-500 font-bold text-[12px] rounded-md"
        >
          optional
        </span>
      </h3>
      <div>
        <input
          v-model="messageFooter"
          type="text"
          class="mb-4 w-full border border-bg-[rgba(0,0,0,0.5)] px-2 py-2 outline-none focus:border-blue-500 focus:shadow focus:shadow-blue-500 rounded-md"
          placeholder="You can use this space to add a tagline, a way to unsubscribe, etc.,"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const messageBody = ref("");
const messageFooter = ref("");
</script>

