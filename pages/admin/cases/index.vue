<template>
  <div class="flex flex-col w-full">
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold mb-4">Cases</h1>

      <div>
        <AppButton to="cases/create" size="small">Create case</AppButton>
      </div>
    </div>

    <div>
      <div class="space-y-4">
        <div v-for="(casePage, index) in cases" :key="index">
          <NuxtLink class="hover:text-blue-700" :to="`cases/${casePage.slug}`">{{ casePage.title }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"

definePageMeta({
  layout: "admin",
  middleware: 'auth'
})

const { data: cases, refresh } = await useFetch("http://localhost:3333/api/v1/cases")

const formData = reactive({
  slug: "",
  title: "",
})

function sendForm() {
  useFetch("http://localhost:3333/api/v1/cases", {
    method: "POST",
    body: formData,
  })

  formData.slug = ""
  formData.title = ""
  formData.data.hero.title = ""

  this.refresh()
}
</script>