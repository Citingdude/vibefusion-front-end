<template>
  <div
    class="flex flex-row items-center space-x-8 lg:space-x-16"
    :class="{
      'lg:flex-row-reverse lg:space-x-reverse lg:self-start':
        props.direction === 'reverse',
      'lg:self-end': props.direction === 'normal',
    }"
  >
    <!-- Number -->
    <div
      class="flex justify-center items-center p-4 bg-light-main rounded-full w-12 h-12 lg:w-16 lg:h-16"
    >
      <p class="text-3xl sm:text-4xl font-bold font-display text-accent">
        {{ props.number }}
      </p>
    </div>

    <!-- Content -->
    <div class="max-w-lg">
      <h3 class="text-2xl sm:text-3xl font-display font-bold mb-4">
        {{ props.title }}
      </h3>

      <p class="text-lg">
        {{ props.content }}
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
