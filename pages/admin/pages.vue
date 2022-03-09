<template>
  <div class="flex flex-col w-full bg-slate-50 p-8">
    <h1 class="text-3xl font-bold mb-4">Pages</h1>

    <div>
      <div class="space-y-4">
        <div v-for="page in pages">
          <h2>{{ page.title }}</h2>
        </div>
      </div>

      <div class="mt-16">
        <form @submit.prevent="sendForm()">
          <input v-model="formData" type="text" />
          <button type="submit">Send</button>
        </form>

        <div>formData: {{ formData }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: "admin"
})

const {
  data: pages
} = await useFetch(
  'http://localhost:3333/api/v1/pages'
)

const formData = ref('')

function sendForm() {
  useFetch('http://localhost:3333/api/v1/pages', {
    method: 'POST',
    body: {
      "slug": "home-3",
      "title": "Home 3",
      "data": {
        "hero": {
          "title": "Versterk je merk met de juiste Vibe"
        }
      }
    }
  })
}
</script>