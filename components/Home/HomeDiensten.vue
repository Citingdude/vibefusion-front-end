<template>
  <section id="onze-diensten" class="bg-light-alt">
    <div
      class="
        container
        mx-auto
        flex flex-col
        py-24
        section-padding-x
        justify-center
        items-center
      "
    >
      <!-- Section title -->
      <div class="flex flex-col items-center mb-8">
        <h2 class="text-4xl lg:text-5xl font-bold font-display mb-4">
          Onze diensten
        </h2>

        <IconsLine />
      </div>

      <!-- Service cards -->
      <div class="grid grid-cols-2 gap-8 lg:gap-12 max-w-5xl w-full">
        <ServiceCard
          v-for="service in home?.services"
          :key="service.id"
          :icon="service.icon"
          :title="service.title"
          :ctaTitle="service.cta.title"
          :ctaUrl="service.cta.url"
          :id="service.id"
          :color="service.color"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  home: {
    type: Object,
    default: () => {},
  },
});
</script>