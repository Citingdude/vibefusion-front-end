<template>
  <div class="flex items-center space-x-8">
    <!-- Icon -->
    <IconsArrow />

    <h3 v-if="props.type === 'normal'" class="text-light-alt text-lg sm:text-2xl">
      {{ props.title }}
    </h3>

    <NuxtLink
      :to="to"
      v-if="props.type === 'cta'"
      class="text-light-main text-lg sm:text-2xl hover:text-accent transition border-b border-accent"
    >
      {{ props.title }}
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "normal",
  },

  to: {
    type: String,
  },

  title: {
    type: String,
    default: "Benefit",
  },
});
</script>
