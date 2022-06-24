<template>
  <div
    class="flex flex-col items-center justify-center col-span-2 p-12 md:col-span-1 bg-dark anim-fade-in-up"
    :class="`${getBorders} ${getColor}`"
  >
    <div v-if="icon">
      <IconsWebdesign v-if="icon === 'webdesign'" />
      <IconsWebshop v-if="icon === 'webshop'" />
      <IconsBranding v-if="icon === 'branding'" />
    </div>

    <h3 class="my-8 text-3xl font-bold font-display" :class="`${getColor}`">
      {{ props.title }}
    </h3>

    <AppButton color="transparent" :to="props.ctaUrl">{{
      props.ctaTitle
    }}</AppButton>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  icon: {
    type: String,
    default: "",
  },

  title: {
    type: String,
    default: "Service title",
  },

  ctaTitle: {
    type: String,
    default: "CTA",
  },

  ctaUrl: {
    type: String,
    default: "",
  },

  color: {
    type: String,
    default: "light",
  },

  id: {
    type: Number,
  },
});

const getBorders = computed(() => {
  switch (props.id) {
    case 1:
      return "rounded-tl-3xl rounded-br-3xl";

    case 2:
      return "rounded-tr-3xl rounded-bl-3xl";

    case 3:
      return "rounded-tr-3xl rounded-bl-3xl";

    case 4:
      return "rounded-tl-3xl rounded-br-3xl";
  }
});

const getColor = computed(() => {
  switch (props.color) {
    case "light":
      return "bg-light-main";

    case "dark":
      return "bg-dark-200 text-light-main";
  }
});
</script>
