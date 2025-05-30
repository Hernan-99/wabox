<template>
  <div>
    <h1 class="text-2xl font-bold mb-6 px-4">Templates</h1>
    <TemplateCardList :templates="templates" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";
import TemplateCardList from "../components/card/TemplateCardList.vue";
import { useTemplate } from "../composables/useTemplate";

const { templates, loading, scroll } = useTemplate();

const handleScroll = () => {
  const scrollBottom =
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
  if (scrollBottom && !loading.value) {
    scroll();
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
