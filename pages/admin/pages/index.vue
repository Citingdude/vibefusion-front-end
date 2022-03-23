<template>
  <div class="flex flex-col w-full">
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold mb-4">Pages</h1>

      <AppButton to="/admin/pages/create" size="small">Create</AppButton>
    </div>

    <div>
      <div class="space-y-4">
        <div v-for="(page, index) in pages" :key="index">
          <NuxtLink class="hover:text-blue-700" :to="`pages/${page.slug}`">{{ page.title }}</NuxtLink>
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

const { data: pages, refresh } = await useFetch("http://localhost:3333/api/v1/pages")

const formData = reactive({
  slug: "",
  title: "",
  data: {
    hero: {
      title: "",
    },
  },
})

function sendForm() {
  useFetch("http://localhost:3333/api/v1/pages", {
    method: "POST",
    body: formData,
  })

  formData.slug = ""
  formData.title = ""
  formData.data.hero.title = ""

  this.refresh()
}
</script>