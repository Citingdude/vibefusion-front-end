<template>
  <div
    class="flex flex-row items-center space-x-16"
    :class="{
      'flex-row-reverse space-x-reverse': props.direction === 'reverse',
    }"
  >
    <!-- Content -->
    <div class="max-w-lg">
      <h3 class="text-3xl font-display font-bold mb-4">
        {{ props.title }}
      </h3>

      <p class="text-lg">
        {{ props.content }}
      </p>
    </div>

    <!-- Number -->
    <div
      class="flex justify-center items-center p-4 bg-light-main rounded-full w-16 h-16"
    >
      <p class="text-4xl font-bold font-display text-accent">
        {{ props.number }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  direction: {
    type: String,
    default: "normal",
  },

  title: {
    type: String,
    default: "Step title",
  },

  content: {
    type: String,
    default: "Step content",
  },

  number: {
    type: String,
    default: "1",
  },
});
</script>
