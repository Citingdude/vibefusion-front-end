<template>
  <nav
    class="hidden lg:flex justify-center items-center space-x-10 col-span-6 font-display font-medium text-xl"
  >
    <NuxtLink to="/">Home</NuxtLink>

    <div @click="toggleDropdown()" class="relative cursor-pointer">
      <p>Diensten</p>

      <Transition>
        <div
          v-if="dienstenDropdown"
          class="absolute flex flex-col top-full p-3 bg-light-alt rounded-xl space-y-3 w-max"
        >
          <AppNavigationLink
            title="Website laten maken"
            icon="webdesign"
            to="/webdesign"
          />
          <AppNavigationLink
            title="Webshop laten maken"
            icon="webshop"
            to="webshop"
          />
          <AppNavigationLink title="Branding" icon="branding" to="branding" />
        </div>
      </Transition>
    </div>

    <NuxtLink to="/cases">Cases</NuxtLink>

    <NuxtLink to="/blog">Blog</NuxtLink>
  </nav>
</template>

<script setup>
import { ref } from "vue";

let dienstenDropdown = ref(false);

function toggleDropdown() {
  document.removeEventListener("click", closeDropdown);
  dienstenDropdown.value = !dienstenDropdown.value;
  setTimeout(() => setCloseEvent(), 100);
}

function closeDropdown() {
  dienstenDropdown.value = false;
  document.removeEventListener("click", closeDropdown);
}

function setCloseEvent() {
  document.addEventListener("click", closeDropdown);
}
</script>

<style scoped>
nav a {
  position: relative;
}

nav > .router-link-active:after {
  content: url("https://vibefusion-demo.be/uploads/dot_c1fd7550d8.svg");
  position: absolute;
  left: 50%;
  transform: translateX(-50%) rotate(180deg);
  bottom: -20px;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-2rem);
  opacity: 0;
}
</style>
