<template>
  <!-- Normal feature card -->
  <div
    v-if="props.type === 'feature'"
    class="p-12"
    :class="getColor, getBorders"
  >
    <IconsRocket v-if="icon" class="mb-6" />

    <h3 class="text-2xl font-bold font-display mb-4">
      {{ props.title }}
    </h3>

    <p>
      {{ props.body }}
    </p>
  </div>

  <!-- CTA Card -->
  <div
    v-if="props.type === 'cta'"
    class="flex flex-col p-12 justify-center text-center"
    :class="getColor, getBorders"
  >
    <h3 class="text-2xl font-bold font-display mb-4">
      {{ props.title }}
    </h3>

    <div class="flex justify-center">
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
    default: "feature",
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

  borders: {
    type: String,
    default: "tr-bl"
  }
});

const getColor = computed(() => {
  switch (props.color) {
    case "light":
      return "bg-light-main";

    case "dark":
      return "bg-dark-300 text-light-main";
  }
});

const getBorders = computed(() => {
  switch (props.borders) {
    case "tl-br":
      return "rounded-br-3xl rounded-tl-3xl"

    case "tr-bl":
      return "rounded-bl-3xl rounded-tr-3xl"

    default:
      return "rounded-bl-3xl rounded-tr-3xl"
  }
})
</script>
