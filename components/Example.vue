<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  de: string
  jp: string
}>()

const hovering = ref(false)
</script>

<template>
  <div class="text-container" @mouseover="hovering = true" @mouseleave="hovering = false">
    <div class="jp">{{ jp }}</div>
    <div :class="{ 'blurred': !hovering }">{{ de }}</div>
  </div>
</template>

<style scoped>
.text-container {
  display: inline-block;
  background: rgba(101, 117, 133, 0.16);
  font-size: 18px;
  width: 100%;
  padding: 16px 32px;
  border-radius: 8px;
  text-align: center;
  margin: 0;
}

.text-container:not(:last-child) {
  margin-bottom: 12px;
}

.blurred {
  filter: blur(8px);
  transition: filter 0.2s ease;
}

.blurred:hover {
  filter: blur(0);
}

.jp {
  margin-bottom: 16px;
}
</style>
