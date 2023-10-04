<script setup lang="ts">
const props = defineProps<{
  src: string;
  alt?: string;
}>()
</script>

<template>
  <div class="rounded-xl mt-10 mb-14 shadow-lg">
    <div class="px-4 py-14">
      <img :src="src" :alt="alt || 'Image'">
    </div>
  </div>
</template>

<style scoped></style>
