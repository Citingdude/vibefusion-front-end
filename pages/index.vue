<template>
  <div>
    <HomeHero :home="home.data.attributes" />
    <HomeDiensten :home="home.data.attributes" />
    <HomeCases :cases="cases" />
    <HomeCta :home="home.data.attributes" />
  </div>
</template>

<script setup>
import * as qs from "qs";

const runtimeConfig = useRuntimeConfig();
const apiBase = runtimeConfig.apiBase;

const query = qs.stringify(
  {
    populate: [
      "Hero",
      "Hero.button",
      "Hero.button_alt",

      "services",
      "services.cta",

      "cta",
      "cta.button",
    ],
  },
  {
    encodeValuesOnly: true,
  }
);

const { data: home } = await useAsyncData("home", () =>
  $fetch(`${apiBase}/homepage?${query}`)
);

const caseQuery = qs.stringify({
  populate: '*'
}, {
  encodeValuesOnly: true,
})

const { data } = await useAsyncData("cases", () =>
  $fetch(`${apiBase}/cases?${caseQuery}`)
);

const cases = data.value.data.slice(0, 2)
</script>