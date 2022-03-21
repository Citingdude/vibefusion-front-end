<template>
  <nav
    v-if="props.mobileMenu"
    class="absolute z-10 flex flex-col top-full justify-center bg-light-alt w-full p-6 font-display font-medium text-xl space-y-4"
  >
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/webdesign">Webdesign</NuxtLink>
    <NuxtLink to="/webshop">Webshop</NuxtLink>
    <NuxtLink to="/branding">Branding</NuxtLink>
    <NuxtLink to="/cases">Cases</NuxtLink>
    <NuxtLink to="/blog">Blog</NuxtLink>
    <NuxtLink to="/blog">Contact</NuxtLink>
  </nav>
</template>

<script setup>
const props = defineProps({
  mobileMenu: Boolean
})

</script>