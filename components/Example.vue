<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  de: string
  jp: string
}>()

const isHovered = ref(false)
</script>

<template>
  <div class="tooltip-container" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <span>{{ jp }}</span>
    <div v-if="isHovered" class="tooltip">{{ de }}</div>
  </div>
</template>

<style scoped>
.tooltip-container {
  position: relative;
  display: inline-block;
  cursor: help;
}

.tooltip {
  visibility: visible;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  z-index: 999;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.9;
  word-wrap: break-word;
  width: max-content;
  max-width: 480px;
  overflow: hidden;
  font-size: 0.9rem;
}

.tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}
</style>
