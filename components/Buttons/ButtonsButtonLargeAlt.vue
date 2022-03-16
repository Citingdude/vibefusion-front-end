<template>
  <NuxtLink
    :to="props.link"
    class="btn-transparent border-2 font-bold font-display text-xl max-w-max py-4 px-8 rounded-tl-xl rounded-br-xl btn-hover"
  >{{ props.text }}</NuxtLink>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'Button'
  },
  link: {
    type: Object,
    default: '/'
  }
})
</script>