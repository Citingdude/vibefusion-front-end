<template>
  <div class="flex flex-col w-full">
    <div>
      <NuxtLink to="/admin/cases">Back</NuxtLink>
    </div>

    <div class="flex justify-between">
      <h1 class="text-3xl font-bold mb-4">Create new case</h1>
    </div>

    <div>
      <div class="mt-16">
        <form @submit.prevent="sendForm()">
          <div class="flex flex-col space-y-4 w-80">
            <!-- Slug -->
            <div class="flex flex-col shadow-sm space-y-2">
              <label class="text-lg font-medium" for>Slug</label>
              <input
                class="border border-blue-50 rounded px-3 py-2"
                v-model="formDataCase.slug"
                type="text"
              />
            </div>

            <!-- Category -->
            <div class="flex flex-col shadow-sm space-y-2">
              <label class="text-lg font-medium" for>Category</label>
              <input
                class="border border-blue-50 rounded px-3 py-2"
                v-model="formDataCase.category"
                type="text"
              />
            </div>

            <!-- Title -->
            <div class="flex flex-col shadow-sm space-y-2">
              <label class="text-lg font-medium" for>Title</label>
              <input
                class="border border-blue-50 rounded px-3 py-2"
                v-model="formDataCase.title"
                type="text"
              />
            </div>

            <!-- Description -->
            <div class="flex flex-col shadow-sm space-y-2">
              <label class="text-lg font-medium" for>Description</label>
              <input
                class="border border-blue-50 rounded px-3 py-2"
                v-model="formDataCase.description"
                type="text"
              />
            </div>

            <!-- image -->
            <div class="flex flex-col shadow-sm space-y-2">
              <label class="text-lg font-medium" for>Image</label>
              <input
                class="border border-blue-50 rounded px-3 py-2"
                v-model="formDataCase.image"
                type="text"
              />
            </div>

            <!-- Content -->
            <div class="flex flex-col shadow-sm space-y-2">
              <label class="text-lg font-medium" for>Content</label>
              <!-- <input
                class="border border-blue-50 rounded px-3 py-2"
                v-model="formDataCase.image"
                type="text"
              />-->
            </div>
          </div>

          <AppButton button color="transparent">Create</AppButton>

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

const formDataCase = reactive({
  slug: "",
  category: "",
  title: "",
  description: "",
  image: "",
  content: {
  },
})

function sendForm() {
  try {
    console.log(formDataCase)

    useFetch("http://localhost:3333/api/v1/cases", {
      method: "POST",
      body: formDataCase,
    })

    formDataCase.slug = ""
    formDataCase.category = ""
    formDataCase.title = ""
    formDataCase.description = ""
    formDataCase.image = ""
    formDataCase.content = {}

    refresh()
  } catch (error) {
    console.log(error)
  }

}
</script>