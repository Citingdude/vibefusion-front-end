<template>
  <div class="flex flex-col w-full">
    <h1
      v-if="props.size === 'h1'"
      class="mb-4 text-5xl font-bold lg:text-6xl font-display"
      :class="{
        'text-light-main': props.textColor === 'light',
        'text-dark-400': props.textColor === 'dark',
      }"
    >
      {{ props.title }}
    </h1>

    <h2
      v-if="props.size === 'h2'"
      class="mb-4 text-4xl font-bold lg:text-5xl font-display"
      :class="{
        'text-light-main': props.textColor === 'light',
        'text-dark-400': props.textColor === 'dark',
      }"
    >
      {{ props.title }}
    </h2>

    <h3
      v-if="props.size === 'h3'"
      class="mb-3 text-3xl font-bold lg:text-4xl font-display"
      :class="{
        'text-light-main': props.textColor === 'light',
        'text-dark-400': props.textColor === 'dark',
      }"
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

  textColor: {
    type: String,
    default: "dark",
  },
});
</script>
