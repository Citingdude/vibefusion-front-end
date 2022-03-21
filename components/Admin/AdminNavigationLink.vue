<template>
  <NuxtLink :to="props.to" class="px-8 py-4 bg-slate-300 hover:bg-slate-400 w-full">
    <slot />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    default: '/'
  }
})
</script>