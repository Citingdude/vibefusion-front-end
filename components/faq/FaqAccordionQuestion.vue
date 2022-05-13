<template>
  <div @click="open = !open" class="cursor-pointer">
    <!-- Question -->
    <div
      class="flex space-x-4 items-center hover:bg-dark-200 transition rounded-full p-4"
    >
      <IconsArrow
        class="transition min-w-max overflow-visible"
        :class="{ 'rotate-90': open }"
      />

      <h3
        class="text-light-main font-display font-semibold text-lg sm:text-2xl lg:text-3xl"
      >
        {{ props.question }}
      </h3>
    </div>

    <!-- Answer -->
    <div v-if="open">
      <p class="text-light-alt max-w-3xl p-4 sm:text-lg">
        {{ props.answer }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  question: {
    type: String,
    default: "Question",
  },

  answer: {
    type: String,
    default: "Answer",
  },

  open: {
    type: Boolean,
    default: false,
  },
});
</script>
