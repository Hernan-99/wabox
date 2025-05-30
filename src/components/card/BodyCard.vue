<template>
  <div class="flex-1 overflow-y-auto card-body-container">
    <ChatPopup
      :message="message"
      :buttons="buttons"
      :header="header"
      :footer="footer"
    />
  </div>
</template>

<script lang="ts" setup>
import ChatPopup from "../common/ChatPopup.vue";
import type { TemplateButton } from "../../types/types";

interface Props {
  message: string;
  buttons: TemplateButton[];
  header?: string;
  footer?: string;
}

defineProps<Props>();
</script>
