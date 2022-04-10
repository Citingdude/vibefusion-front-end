<template>
  <div>
    <HomeHero :home="home" />
    <HomeDiensten :home="home" />
    <HomeCases />
    <HomeCta :home="home" />
  </div>
</template>

<script setup>
const { data:home } = await useAsyncData("home", () =>
  $fetch("http://localhost:3333/api/v1/pages/home")
);
</script>