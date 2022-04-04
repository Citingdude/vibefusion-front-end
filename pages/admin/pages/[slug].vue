<template>
  <div class="flex flex-col w-full bg-slate-50 p-8">
    <h1 class="text-3xl font-bold mb-4">{{ page.title }}</h1>

    <div>
      <div class="mt-8">
        <form @submit.prevent="updatePage()">
          <h2 class="text-2xl font-semibold mb-4">Meta</h2>

          <div class="flex flex-col space-y-4 max-w-lg">
            <div class="flex flex-col shadow-sm space-y-2">
              <label class="text-lg font-medium" for>Slug</label>
              <input
                class="border border-blue-50 rounded px-3 py-2"
                v-model="formDataTest.slug"
                type="text"
              />
            </div>

            <div class="flex flex-col shadow-sm space-y-2">
              <label class="text-lg font-medium" for>Title</label>
              <input
                class="border border-blue-50 rounded px-3 py-2"
                v-model="formDataTest.title"
                type="text"
                :placeholder="page.title"
              />
            </div>

            <div class="flex flex-col shadow-sm space-y-2">
              <label class="text-lg font-medium" for>Image</label>
              <input
                class="border border-blue-50 rounded px-3 py-2"
                type="file"
                id="file"
                ref="file"
                v-on:change="handleFileUpload()"
                :placeholder="page.title"
              />
            </div>

            <h2 class="text-2xl font-semibold mb-4">Hero</h2>

            <div class="flex flex-col shadow-sm space-y-2">
              <TipTap v-model="formDataTest.data.hero.title" />
            </div>

            <div class="flex flex-col shadow-sm space-y-2">
              <label class="text-lg font-medium" for>Hero button</label>
              <input
                class="border border-blue-50 rounded px-3 py-2"
                v-model="formDataTest.data.hero.button"
                type="text"
                :placeholder="formDataTest.data.hero.button"
              />
            </div>

            <div class="flex flex-col shadow-sm space-y-2">
              <label class="text-lg font-medium" for>Hero button alt</label>
              <input
                class="border border-blue-50 rounded px-3 py-2"
                v-model="formDataTest.data.hero.button_alt"
                type="text"
                :placeholder="formDataTest.data.hero.button_alt"
              />
            </div>
          </div>

          <div class="mt-8">
            <AppButton type="submit" button size="small">Save</AppButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const route = useRoute()

const { data: page } = await useFetch(`http://localhost:3333/api/v1/pages/${route.params.slug}`);

definePageMeta({
  layout: "admin",
  middleware: 'auth'
});

const file = ref(null)

const formDataTest = reactive({
  slug: page.value.slug,
  title: page.value.title,
  image: "",
  data: {
    hero: {
      title: page.value.data.hero.title,
      button: page.value.data.hero.button,
      button_alt: page.value.data.hero.button_alt,
    },
  },
})

function handleFileUpload() {
  console.log(file.value.files[0])
}

async function updatePage() {
  var formData = new FormData();

  formData.append("file", file.value.files[0])
  formData.append("slug", formDataTest.slug)
  formData.append("title", formDataTest.title)
  formData.append("data", JSON.stringify(formDataTest.data))

  console.log(formData.get('file'));

  const { data, refresh } = await useFetch(`http://localhost:3333/api/v1/pages/${route.params.slug}`, {
    method: "PATCH",
    body: formData,
  })

  console.log(data.value)

  refresh()
}
</script>