<template>
  <NuxtLink
    :to="props.to"
    class="flex space-x-4 items-center hover:bg-light-main p-4 rounded-xl"
  >
    <component :is="getIcon" class="w-12 h-12" />
    <p :to="props.to">
      {{ props.title }}
    </p>
  </NuxtLink>
</template>

<script setup>
import { defineAsyncComponent, computed } from "vue";

const WebdesignIcon = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    resolve(import("~/components/icons/IconsWebdesign.vue"));
  });
});

const WebshopIcon = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    resolve(import("~/components/icons/IconsWebshop.vue"));
  });
});

const BrandingIcon = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    resolve(import("~/components/icons/IconsBranding.vue"));
  });
});

const props = defineProps({
  title: {
    type: String,
    default: "Link",
  },

  icon: {
    type: String,
    default: "webdesign",
  },

  to: {
    type: String,
    default: "/",
  },
});

const getIcon = computed(() => {
  switch (props.icon) {
    case "webdesign":
      return WebdesignIcon;

    case "webshop":
      return WebshopIcon;

    case "branding":
      return BrandingIcon;

    default:
      return WebdesignIcon;
  }
});
</script>

<style lang="scss" scoped></style>
