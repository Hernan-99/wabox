<template>
  <Header :brand="brand" :textBtn="textBtn" />
  <main class="container mx-auto px-4 md:px-6">
    <slot />
  </main>
  <Footer :copy="copy" />
</template>

<script lang="ts" setup>
import Header from "../components/shared/Header.vue";
import Footer from "../components/shared/Footer.vue";

const brand: string = "Wabox";
const textBtn: string = "Create new template";
const copy: string = "© 2025 wabox - challenge";
</script>