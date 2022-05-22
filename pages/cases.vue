<template>
  <div>
    <div>Cases</div>

    <div>
      {{ cases }}
    </div>
  </div>
</template>

<script setup>
import caseQuery from "~/queries/cases";

const apiBase = useApiBase();

const { data: cases } = await useAsyncData("cases", () =>
  $fetch(`${apiBase}/cases?${caseQuery}`)
);
</script>
