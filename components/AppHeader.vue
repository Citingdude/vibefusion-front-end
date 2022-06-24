<template>
  <header class="shadow-2xl">
    <div
      class="container relative grid items-center grid-cols-12 py-4 mx-auto lg:gap-12 section-padding-x lg:py-6"
    >
      <div class="col-span-8 lg:col-span-3 w-60">
        <NuxtLink to="/">
          <AppLogo />
        </NuxtLink>
      </div>

      <AppNavigation />

      <div class="justify-end hidden lg:flex lg:col-span-3">
        <NuxtLink
          to="/contact"
          class="px-4 py-2 text-xl font-medium transition border-2 rounded-tl-lg rounded-br-lg bg-light-alt font-display text-accent border-light-main hover:border-accent"
        >Contact</NuxtLink>
      </div>

      <!-- Hamburger -->
      <div @click="toggleMobileMenu()" class="flex items-center justify-end col-span-4 lg:hidden">
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