<template>
  <div class="p-12 rounded-bl-3xl rounded-tr-3xl" :class="getColor">
    <IconsRocket v-if="icon" class="mb-6" />

    <h3 class="text-2xl font-bold font-display mb-4">
      {{ props.title }}
    </h3>

    <p v-if="props.type === 'card'">
      {{ props.body }}
    </p>

    <div class="flex">
      <AppButton color="transparent" v-if="props.type === 'cta'"
        >Vraag een gesprek aan</AppButton
      >
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "card",
  },

  icon: {
    type: String,
    default: "",
  },

  color: {
    type: String,
    default: "",
  },

  title: {
    type: String,
    default: "Feature title",
  },

  body: {
    type: String,
    default: "Feature body",
  },
});

const getColor = computed(() => {
  switch (props.color) {
    case "light":
      return "bg-light-main";

    case "dark":
      return "bg-dark-300 text-light-main";
  }
});
</script>
