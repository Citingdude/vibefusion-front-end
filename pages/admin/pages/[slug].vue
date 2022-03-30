<template>
  <div class="flex flex-col w-full bg-slate-50 p-8">
    <h1 class="text-3xl font-bold mb-4">Page: {{ $route.params.slug }}</h1>

    <div>
      <div class="mt-16">
        <form @submit.prevent="updatePage()">
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
                :placeholder="page.title"
              />
            </div>

            <div class="flex flex-col shadow-sm space-y-2">
              <label class="text-lg font-medium" for>Hero title</label>
              <input
                class="border border-blue-50 rounded px-3 py-2"
                v-model="formData.data.hero.title"
                type="text"
                :placeholder="page.data.hero.title"
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

    <button @click="assignData()">Test</button>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

const route = useRoute()

definePageMeta({
  layout: "admin",
  middleware: 'auth'
});

const formData = reactive({
  slug: "",
  title: "",
  data: {
    hero: {
      title: "",
    },
  },
})

function updatePage() {
  const { refresh } = useFetch(`http://localhost:3333/api/v1/pages/${route.params.slug}`, {
    method: "PATCH",
    body: formData
  })

  refresh()
}

function assignData() {
  formData.slug = page.value.slug
  
  console.log(page.value.slug)
  console.log(formData)
}

const { data: page } = await useFetch(`http://localhost:3333/api/v1/pages/${route.params.slug}`);
</script>