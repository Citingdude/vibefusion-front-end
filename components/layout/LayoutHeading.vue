<template>
  <div class="flex flex-col w-full">
    <h2 class="text-4xl lg:text-5xl font-bold font-display mb-4">
      {{ props.title }}
    </h2>

    <IconsLine />
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Section title"
  }
})

</script>
