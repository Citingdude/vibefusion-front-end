<template>
  <NuxtLink 
    :to="props.to" 
    class="
    font-semibold
    px-4 py-3 w-fit rounded-md border-opacity-0 border-transparent border
    hover:bg-light-alt hover:border-accent hover:border-opacity-100
    ">
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

<style scoped>
.router-link-active {
  @apply bg-light-alt border-accent border-opacity-100;
}
</style>