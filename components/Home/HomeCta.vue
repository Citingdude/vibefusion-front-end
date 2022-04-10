<template>
  <section class="flex section-padding-x bg-dark-300 justify-center">
    <div class="flex flex-col py-20 content-container">
      <!-- Heading -->
      <div class="flex flex-col mb-4">
        <div
          v-html="home.content.cta_banner.title"
          class="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-3 text-light-main"
        ></div>
      </div>

      <!-- Body -->
      <div
        v-html="home.content.cta_banner.body"
        class="font-body text-light-alt mb-8 text-base md:text-lg lg:text-xl max-w-xl"
      ></div>

      <!-- Button -->
      <AppButton color="transparent-alt" to="contact">
        {{ home.content.cta_banner.button }}
      </AppButton>
    </div>
  </section>
</template>

<script setup>
defineProps({
  home: {
    type: Object,
    default: () => { }
  }
})
</script>