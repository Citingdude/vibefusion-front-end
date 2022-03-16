<template>
  <footer class="section-padding-x bg-dark-400 pt-16 pb-8">
    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 content-container mb-10">
      <div>
        <h3 class="text-light-main text-2xl font-display mb-4">Navigatie</h3>
        <div class="flex flex-col space-y-1">
          <a href="#" class="text-light-main link-hover">Home</a>
          <a href="#" class="text-light-main link-hover">Cases</a>
          <a href="#" class="text-light-main link-hover">Blog</a>
          <a href="#" class="text-light-main link-hover">Contact</a>
        </div>
      </div>

      <div>
        <h3 class="text-light-main text-2xl font-display mb-4">Diensten</h3>
        <div class="flex flex-col space-y-1">
          <a href="#" class="text-light-main link-hover">Website laten maken</a>
          <a href="#" class="text-light-main link-hover">Webshop laten maken</a>
          <a href="#" class="text-light-main link-hover">Branding</a>
        </div>
      </div>

      <div>
        <h3 class="text-light-main text-2xl font-display mb-4">Contactgegevens</h3>
        <div class="flex flex-col space-y-1">
          <p class="text-light-main">Meesstraat 7</p>
          <p class="text-light-main">3950 Bocholt</p>
          <a href="#" class="text-light-main link-hover">0470 59 88 37</a>
          <a href="#" class="text-light-main link-hover">info@vibefusion.be</a>
        </div>
      </div>

      <div>
        <a class="flex max-w-xs" href="/">
          <branding-Logo />
        </a>
      </div>
    </div>

    <div
      class="content-container flex md:flex-row flex-col md:justify-between items-center pt-4 border-t-2 border-dark-100"
    >
      <p class="text-light-alt md:mb-0 mb-4">Copyright © {{ getYear }} VibeFusion</p>

      <div class="flex flex-row text-light-alt space-x-12">
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