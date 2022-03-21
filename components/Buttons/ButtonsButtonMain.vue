<template>
  <NuxtLink
    :to="props.link"
    class="btn-m btn-accent font-bold font-display text-lg btn-hover max-w-max rounded-tl-xl rounded-br-xl"
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