<template>
  <div
    v-if="(props.color = 'light')"
    class="
      flex flex-col
      justify-center
      items-center
      col-span-2
      md:col-span-1
      p-12 bg-dark
      anim-fade-in-up
    "
    :class="`${getBorders} ${getColor}`"
  >
    <div v-if="icon">
      <IconsWebdesign v-if="icon === 'webdesign'" />
      <IconsWebshop v-if="icon === 'webshop'" />
      <IconsBranding v-if="icon === 'branding'" />
    </div>

    <h3 class="font-display font-bold text-3xl my-8">
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

const getColor= computed(() => {
  switch (props.color) {
    case "light":
      return "bg-light-main"

    case "dark":
      return "bg-dark-200 text-light-main"
  }
})
</script>