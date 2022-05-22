<template>
  <div class="flex flex-col w-full">
    <h1
      v-if="props.size === 'h1'"
      class="text-5xl lg:text-6xl font-bold font-display mb-4"
    >
      {{ props.title }}
    </h1>

    <h2
      v-if="props.size === 'h2'"
      class="text-4xl lg:text-5xl font-bold font-display mb-4"
    >
      {{ props.title }}
    </h2>

    <h3
      v-if="props.size === 'h3'"
      class="text-3xl lg:text-4xl font-bold font-display mb-3"
    >
      {{ props.title }}
    </h3>

    <IconsLine />
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Section title",
  },

  size: {
    type: String,
    default: "h2",
  },
});
</script>
