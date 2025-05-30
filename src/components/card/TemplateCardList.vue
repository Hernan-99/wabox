<template>
  <section
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mb-20"
  >
    <CardCreate :headerText="headerText" :footerText="footerText" />
    <CardItem
      v-for="template in templates"
      :key="template.id"
      :template="template"
    />
  </section>
</template>

<script lang="ts" setup>
import type { Template } from "../../types/types";
import CardCreate from "./CardCreate.vue";
import CardItem from "./CardItem.vue";

interface Props {
  templates: Template[];
}
const { templates } = defineProps<Props>();

const headerText: string = "Create new template";
const footerText: string = "Create new from or libary";
</script>
