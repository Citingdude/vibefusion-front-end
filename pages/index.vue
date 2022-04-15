<template>
  <div>
    <HomeHero :home="home.data.attributes" />
    <!-- <HomeDiensten /> -->
    <!-- <HomeCases /> -->
    <!-- <HomeCta /> -->
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const apiBase = runtimeConfig.apiBase;

import * as qs from "qs";

const query = qs.stringify(
  {
    populate: [
      "Hero",
      "Hero.button",
      "Hero.button_alt"
    ],
  },
  {
    encodeValuesOnly: true,
  }
);

const { data: home } = await useAsyncData("home", () =>
  $fetch(`${apiBase}/homepage?${query}`)
);

console.log(home)
</script>