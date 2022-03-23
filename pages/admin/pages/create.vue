<template>
  <div class="flex flex-col w-full">
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold mb-4">Create new page</h1>
    </div>

    <div>
      <div class="mt-16">
        <form @submit.prevent="sendForm()">
          <div class="flex flex-col space-y-4 w-80">
            <div class="flex flex-col shadow-sm space-y-2">
              <label class="text-lg font-medium" for>Slug</label>
              <input
                class="border border-blue-50 rounded px-3 py-2"
                v-model="formData.slug"
                type="text"
              />
            </div>

            <div class="flex flex-col shadow-sm space-y-2">
              <label class="text-lg font-medium" for>Title</label>
              <input
                class="border border-blue-50 rounded px-3 py-2"
                v-model="formData.title"
                type="text"
              />
            </div>

            <div class="flex flex-col shadow-sm space-y-2">
              <label class="text-lg font-medium" for>Hero title</label>
              <input
                class="border border-blue-50 rounded px-3 py-2"
                v-model="formData.data.hero.title"
                type="text"
              />
            </div>
          </div>

          <button
            class="mt-4 bg-blue-500 px-3 py-2 rounded-lg text-blue-50 hover:bg-blue-700 transition"
            type="submit"
          >Send</button>
        </form>
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