<template>
  <section id="onze-diensten" class="bg-light-alt">
    <div
      class="container mx-auto flex flex-col py-24 section-padding-x justify-center items-center"
    >
      <!-- Section title -->
      <div class="flex flex-col items-center mb-8">
        <h2 class="text-4xl lg:text-5xl font-bold font-display mb-4">Onze diensten</h2>

        <IconsLine />
      </div>

      <!-- Section content -->
      <div class="grid grid-cols-2 gap-8 lg:gap-12 max-w-5xl w-full">
        <!-- Service 1 -->
        <div
          class="flex flex-col justify-center items-center bg-light-main col-span-2 md:col-span-1 p-12 rounded-tl-3xl rounded-br-3xl anim-fade-in-up"
        >
          <IconsWebdesign />

          <h3
            class="font-display font-bold text-3xl my-8"
          >{{ home?.content.services.service_1.title }}</h3>

          <AppButton
            color="transparent"
            to="webdesign"
          >{{ home?.content.services.service_1.button }}</AppButton>
        </div>

        <!-- Service 2 -->
        <div
          class="flex flex-col justify-center items-center bg-light-main col-span-2 md:col-span-1 p-12 rounded-tr-3xl rounded-bl-3xl anim-fade-in-up"
        >
          <IconsWebshop />

          <h3
            class="font-display font-bold text-3xl my-8"
          >{{ home?.content.services.service_2.title }}</h3>

          <AppButton color="transparent" to="webshop">{{ home?.content.services.service_2.button }}</AppButton>
        </div>

        <!-- Service 3 -->
        <div
          class="flex flex-col justify-center items-center bg-light-main col-span-2 md:col-span-1 p-12 rounded-tr-3xl rounded-bl-3xl anim-fade-in-up"
        >
          <IconsBranding />

          <h3
            class="font-display font-bold text-3xl my-8"
          >{{ home?.content.services.service_3.title }}</h3>

          <AppButton color="transparent" to="branding">{{ home?.content.services.service_3.button }}</AppButton>
        </div>

        <!-- CTA -->
        <div
          class="flex flex-col justify-center items-center bg-dark-300 col-span-2 md:col-span-1 p-12 rounded-tl-3xl rounded-br-3xl anim-fade-in-up"
        >
          <h3
            class="font-display font-bold text-3xl lg:text-4xl mb-8 text-light-main"
          >{{ home?.content.services.cta.title }}</h3>

          <AppButton color="transparent-alt" to="contact">{{ home?.content.services.cta.button }}</AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  home: {
    type: Object,
    default: () => {}
  }
})
</script>