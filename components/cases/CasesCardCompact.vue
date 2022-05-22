<template>
  <div>
    <!-- Image -->
    <div>
      <img class="rounded-tr-4xl" :src="baseUrl + imageUrl" alt="" />
    </div>

    <!-- Content -->
    <div class="bg-dark-300 p-16 rounded-bl-4xl">
      <h3 class="text-light-main text-4xl font-display mb-8 font-semibold">
        {{ caseTitle }}
      </h3>

      <div class="flex">
        <AppButton color="transparent-alt">Lees de case</AppButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const baseUrl = useBaseUrl();

const props = defineProps({
  imageUrl: {
    type: String,
    default: "",
  },

  caseTitle: {
    type: String,
    default: "Case Title",
  },
});
</script>
