<template>
  <header class="shadow-xl">
    <div
      class="container mx-auto relative grid grid-cols-12 lg:gap-12 section-padding-x py-4 lg:py-6 items-center"
    >
      <div class="col-span-8 lg:col-span-3 w-60">
        <NuxtLink to="/">
          <AppLogo />
        </NuxtLink>
      </div>

      <AppNavigation />

      <div class="hidden lg:flex lg:col-span-3 justify-end">
        <NuxtLink
          to="/contact"
          class="bg-light-alt px-4 py-2 rounded-tl-lg rounded-br-lg font-display font-medium text-xl text-accent transition border-2 border-light-main hover:border-accent"
        >Contact</NuxtLink>
      </div>

      <!-- Hamburger -->
      <div @click="toggleMobileMenu()" class="flex col-span-4 lg:hidden justify-end items-center">
        <AppHamburger />
      </div>

      <MobileNavigation :mobileMenu="mobileMenu" />
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import AppLogo from './branding/AppLogo.vue';

let mobileMenu = ref(false)

function toggleMobileMenu() {
  mobileMenu.value = !mobileMenu.value
  // if (mobileMenu) {
  //   setTimeout(() => setCloseEvent(), 100);
  // }
}

// function closeMobileMenu() {
//   mobileMenu.value = false
//   window.removeEventListener('click', closeMobileMenu)
// }

// function setCloseEvent() {
//   window.addEventListener('click', closeMobileMenu)
// }

</script>