<template>
  <div>
    <HomeHero :home="home" />
    <HomeDiensten :home="home" />
    <HomeCases />
    <HomeCta :home="home" />
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const apiBase = runtimeConfig.apiBase

const { data:home } = await useAsyncData("home", () =>
  $fetch(`${apiBase}/pages/home`)
);
</script>