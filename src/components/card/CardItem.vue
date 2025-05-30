<template>
  <section
    class="bg-[#edf2f7] rounded-lg shadow-md overflow-hidden w-[400px] h-[450px] flex justify-between flex-col border border-gray-200"
  >
    <!-- HEADER -->
    <HeaderCard
      :title="template.name"
      :status="template.status"
      :category="template.category"
    />

    <!-- BODY -->
    <BodyCard
      :message="template.components.body.content"
      :header="template.components.header?.content"
      :footer="template.components.footer"
      :buttons="template.components.buttons"
    />

    <!-- FOOTER -->
    <FooterCard :lang="template.language" :date="formatDate()" />
  </section>
</template>

<script lang="ts" setup>
import HeaderCard from "./HeaderCard.vue";
import type { Template } from "../../types/types";
import FooterCard from "./FooterCard.vue";
import { formatDate } from "../../utils/utils";
import BodyCard from "./BodyCard.vue";

interface Props {
  template: Template;
}

const { template } = defineProps<Props>();
</script>
