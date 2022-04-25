<template>
  <div>
    <HomeHero :home="home.data.attributes" />
    <HomeDiensten :home="home.data.attributes" />
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
      "Hero.button_alt",

      "services",
      "services.cta"
    ],
  },
  {
    encodeValuesOnly: true,
  }
);

const { data: home } = await useAsyncData("home", () =>
  $fetch(`${apiBase}/homepage?${query}`)
);
</script>