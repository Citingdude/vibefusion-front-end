<template>
  <nav
    class="hidden lg:flex justify-center items-center space-x-10 col-span-6 font-display font-medium text-xl"
  >
    <NuxtLink to="/">Home</NuxtLink>

    <div @click="toggleDropdown()" class="relative cursor-pointer">
      <p>Diensten</p>
      <div
        v-if="dienstenDropdown"
        class="absolute flex flex-col top-full p-6 bg-light-alt rounded-2xl space-y-3"
      >
        <NuxtLink to="/webdesign">Webdesign</NuxtLink>
        <NuxtLink to="/webshop">Webshop</NuxtLink>
        <NuxtLink to="/branding">Branding</NuxtLink>
      </div>
    </div>

    <NuxtLink to="/cases">Cases</NuxtLink>

    <NuxtLink to="/blog">Blog</NuxtLink>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

let dienstenDropdown = ref(false)

function toggleDropdown() {
  dienstenDropdown.value = !dienstenDropdown.value
  if (dienstenDropdown) {
    setTimeout(() => setCloseEvent(), 500);
  }
}

function closeDropdown() {
  dienstenDropdown.value = false
  window.removeEventListener('click', closeDropdown)
}

function setCloseEvent() {
  window.addEventListener('click', closeDropdown)
}
</script>