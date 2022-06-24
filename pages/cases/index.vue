<template>
  <div>
    <!-- Hero -->
    <section class="container py-20 md:py-40">
      <LayoutHeading
        class="flex items-start mb-16"
        title="Projecten waar we trots op zijn"
        size="h1"
      />

      <!-- Cases -->
      <div class="grid gap-16 lg:grid-cols-2">
        <CasesCardCompact
          v-for="caseCard in cases"
          :key="caseCard.id"
          :caseTitle="caseCard.attributes.Title"
          :imageUrl="`${baseUrl}${caseCard.attributes.Image.data.attributes.url}`"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import caseQuery from "~/queries/cases";

const apiBase = useApiBase();
const baseUrl = useBaseUrl();

const { data } = await useAsyncData("cases", () =>
  $fetch(`${apiBase}/cases?${caseQuery()}`)
);

const cases = data.value.data;
</script>
