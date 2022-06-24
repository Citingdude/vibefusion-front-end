<template>
  <div>
    <!-- Hero -->
    <section
      class="container grid items-center justify-center grid-cols-2 gap-12 pt-20 lg:pt-32 lg:pb-40 md:h-[90vh] lg:grid-cols-12"
    >
      <!-- Content -->
      <div
        class="items-center max-w-full col-span-2 lg:col-span-6 anim-fade-in-left"
      >
        <!-- Heading -->
        <div
          v-html="home?.Hero?.Title"
          class="mb-16 text-6xl lg:text-7xl font-display lg:mb-24"
        ></div>

        <!-- Buttons -->
        <div
          class="flex flex-col items-center gap-8 md:flex-row md:items-start"
        >
          <AppButton hashlink="onze-diensten" size="large">
            {{ home?.Hero?.button?.title }}
          </AppButton>

          <AppButton hashlink="cases" size="large" color="transparent">
            {{ home?.Hero?.button_alt?.title }}
          </AppButton>
        </div>
      </div>

      <!-- Illustration -->
      <div class="col-span-2 lg:col-span-6 anim-fade-in-right">
        <IllustrationsHomeHero />
      </div>
    </section>

    <!-- Diensten -->
    <section id="onze-diensten" class="py-20 bg-light-alt md:py-40">
      <div class="container flex flex-col items-center justify-center">
        <!-- Section title -->
        <div class="flex flex-col items-center mb-16">
          <h2 class="mb-4 text-4xl font-bold lg:text-5xl font-display">
            Onze diensten
          </h2>

          <IconsLine />
        </div>

        <!-- Service cards -->
        <div class="grid w-full max-w-5xl grid-cols-2 gap-8 lg:gap-12">
          <ServiceCard
            v-for="service in home?.services"
            :key="service.id"
            :icon="service.icon"
            :title="service.title"
            :ctaTitle="service.cta.title"
            :ctaUrl="service.cta.url"
            :id="service.id"
            :color="service.color"
          />
        </div>
      </div>
    </section>

    <!-- Cases -->
    <section id="cases" class="py-20 md:py-40">
      <div class="container flex flex-col items-center justify-center">
        <!-- Section heading -->
        <div class="flex flex-col items-center mb-16">
          <h2 class="mb-4 text-4xl font-bold lg:text-5xl font-display">
            Cases
          </h2>

          <IconsLine />
        </div>

        <!-- Cases -->
        <div>
          <CasesCard
            v-for="(casePage, index) in cases"
            :key="casePage.id"
            :badgeText="casePage.attributes.category.data.attributes.Title"
            :title="casePage.attributes.Title"
            :summary="casePage.attributes.summary"
            :image="`${baseUrl}${casePage.attributes.Image.data.attributes.url}`"
            :link="`/cases/${casePage.attributes.slug}`"
            :imageOrder="{ 'order-2': index % 2 === 0 }"
            :contentOrder="{ 'order-1': index % 2 === 0 }"
          />
        </div>
      </div>
    </section>

    <!-- Cta -->
    <section class="flex justify-center py-20 bg-dark-300 md:py-40">
      <div class="flex flex-col">
        <!-- Heading -->
        <div class="flex flex-col mb-4">
          <div
            v-html="home.cta.title"
            class="mb-3 text-3xl font-bold md:text-4xl lg:text-5xl font-display text-light-main"
          ></div>
        </div>

        <!-- Body -->
        <div
          v-html="home.cta.body"
          class="max-w-xl mb-8 text-base font-body text-light-alt md:text-lg lg:text-xl"
        ></div>

        <!-- Button -->
        <AppButton color="transparent-alt" :to="home.cta.button.url">
          {{ home.cta.button.title }}
        </AppButton>
      </div>
    </section>
  </div>
</template>

<script setup>
import * as qs from "qs";

definePageMeta({
  title: "My home page",
  layoutTransition: {
    name: "page",
  },
});

const runtimeConfig = useRuntimeConfig();
const apiBase = runtimeConfig.apiBase;
const baseUrl = runtimeConfig.baseUrl;

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

const { data: homeRes } = await useAsyncData("home", () =>
  $fetch(`${apiBase}/homepage?${query}`)
);

const home = homeRes.value.data.attributes;

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

<style>
.page-enter-from {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
  transition-timing-function: ease-in-out;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
