<template>
  <section
    class="pop-up break-words flex-1 max-w-[300px] bg-white rounded-lg relative shadow px-4 py-3"
  >
    <p v-if="header" class="text-md font-bold mb-4">{{ header }}</p>

    <p class="mb-4" v-html="message_var"></p>
    <p v-if="footer" class="mb-4">{{ footer }}</p>

    <div v-if="buttons && buttons.length" class="mt-3 flex flex-col gap-2">
      <ButtonsCard
        v-if="buttons.length"
        :buttons="buttons"
        :IsVisible="showBtns"
        @showAllBtns="handleExpand"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { matchVariable } from "../../utils/utils";
import type { TemplateButton } from "../../types/types";
import ButtonsCard from "../card/ButtonsCard.vue";

interface Props {
  message: string;
  buttons: TemplateButton[];
  header?: string;
  footer?: string;
}

const props = defineProps<Props>();
const showBtns = ref(false);

const handleExpand = () => {
  showBtns.value = true;
};

const message_var = computed(() => matchVariable(props.message));
</script>

<style scoped>
.pop-up {
  margin: 0.5rem 0 0.5rem 1.5rem;
}
.pop-up::before {
  content: "";
  position: absolute;
  top: 0;
  left: -16px;
  width: 0;
  height: 0;
  border: 16px solid;
  border-color: white transparent transparent transparent;
}
</style>
