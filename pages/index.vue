<template>
  <div>
    <!-- Hero -->
    <section
      class="container mx-auto pt-20 lg:pt-32 lg:pb-40 bg-left bg-no-repeat bg-cover section-padding-x"
    >
      <div class="content-container items-center">
        <div class="grid grid-cols-2 lg:grid-cols-12 gap-12">
          <!-- Content -->
          <div
            class="col-span-2 lg:col-span-6 max-w-full items-center anim-fade-in-left"
          >
            <!-- Heading -->
            <div
              v-html="home?.data.attributes.Hero?.Title"
              class="text-6xl lg:text-7xl font-display mb-16 lg:mb-24"
            ></div>

            <!-- Buttons -->
            <div
              class="flex flex-col md:flex-row items-center md:items-start gap-8"
            >
              <AppButton hashlink="onze-diensten" size="large">
                {{ home?.data.attributes.Hero?.button?.title }}
              </AppButton>

              <AppButton hashlink="cases" size="large" color="transparent">
                {{ home?.data.attributes.Hero?.button_alt?.title }}
              </AppButton>
            </div>
          </div>

          <!-- Illustration -->
          <div class="col-span-2 lg:col-span-6 anim-fade-in-right">
            <IllustrationsHomeHero />
          </div>
        </div>
      </div>
    </section>
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

const caseQuery = qs.stringify(
  {
    populate: "*",
  },
  {
    encodeValuesOnly: true,
  }
);

const { data } = await useAsyncData("cases", () =>
  $fetch(`${apiBase}/cases?${caseQuery}`)
);

const cases = data.value.data.slice(0, 2);
</script>
