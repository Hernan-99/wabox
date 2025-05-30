<template>
  <article
    class="bg-[#edf2f7] w-[400px] h-[450px] flex flex-col pb-2 rounded-md"
  >
    <div class="card-header">
      <p class="text-xl font-bold border-b-2 p-4 text-center">
        {{ headerText }}
      </p>
    </div>
    <div class="card-body flex-1 flex flex-col justify-center items-center">
      <RouterLink to="/create-template">
        <PlusCircleIcon
          class="text-blue-500 hover:text-blue-800 ease-in-out duration-300 text-xl w-16 h-16"
        />
      </RouterLink>
    </div>
    <div class="card-footer text-center p-2">
      <a class="text-center p-4 underline text-slate-400 font-bold" href=""
        >{{ footerText }}
      </a>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { PlusCircleIcon } from "@heroicons/vue/16/solid";
import { RouterLink } from "vue-router";

interface Props {
  headerText: string;
  footerText: string;
}
const { headerText, footerText } = defineProps<Props>();
</script>
