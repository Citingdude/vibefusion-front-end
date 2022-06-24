<template>
  <footer class="pt-16 pb-8 bg-dark-400">
    <div class="container grid grid-cols-1 gap-12 mb-10 lg:grid-cols-4 md:grid-cols-2">
      <div>
        <h3 class="mb-4 text-2xl text-light-main font-display">Navigatie</h3>
        <div class="flex flex-col space-y-1">
          <a href="#" class="text-light-main link-hover">Home</a>
          <a href="#" class="text-light-main link-hover">Cases</a>
          <a href="#" class="text-light-main link-hover">Blog</a>
          <a href="#" class="text-light-main link-hover">Contact</a>
        </div>
      </div>

      <div>
        <h3 class="mb-4 text-2xl text-light-main font-display">Diensten</h3>
        <div class="flex flex-col space-y-1">
          <a href="#" class="text-light-main link-hover">Website laten maken</a>
          <a href="#" class="text-light-main link-hover">Webshop laten maken</a>
          <a href="#" class="text-light-main link-hover">Branding</a>
        </div>
      </div>

      <div>
        <h3 class="mb-4 text-2xl text-light-main font-display">Contactgegevens</h3>
        <div class="flex flex-col space-y-1">
          <p class="text-light-main">Meesstraat 7</p>
          <p class="text-light-main">3950 Bocholt</p>
          <a href="#" class="text-light-main link-hover">0470 59 88 37</a>
          <a href="#" class="text-light-main link-hover">info@vibefusion.be</a>
        </div>
      </div>

      <div>
        <a class="flex max-w-xs" href="/">
          <BrandingAppLogo />
        </a>
      </div>
    </div>

    <div
      class="container flex flex-col items-center pt-4 border-t-2 md:flex-row md:justify-between border-dark-100"
    >
      <p class="mb-4 text-light-alt md:mb-0">Copyright © {{ getYear }} VibeFusion</p>

      <div class="flex flex-row space-x-12 text-light-alt">
        <a class="link-hover" href="/cookiebeleid">Cookiebeleid</a>
        <a class="link-hover" href="/privacyverklaring">Privacyverklaring</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const getYear = computed(() => {
  const date = new Date();
  const year = date.getFullYear();
  return year;
})
</script>