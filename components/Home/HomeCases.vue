<template>
  <section id="cases" class="section-padding-x">
    <div class="flex flex-col py-24 container mx-auto justify-center items-center">
      <!-- Section heading -->
      <div class="flex flex-col items-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold font-display mb-4">Cases</h2>

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
          :imageOrder="{'order-2': index % 2 === 0}"
          :contentOrder="{'order-1': index % 2 === 0}"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const baseUrl = runtimeConfig.baseUrl

const props = defineProps({
  cases: {
    type: Object,
    default: () => {},
  },
});
</script>