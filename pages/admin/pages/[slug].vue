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

            <h2 class="text-2xl font-semibold mb-4">Hero</h2>

            <div class="flex flex-col shadow-sm space-y-2">
              <label class="text-lg font-medium" for>Hero title</label>
              <input
                class="border border-blue-50 rounded px-3 py-2"
                v-model="formData.data.hero.title"
                type="text"
                :placeholder="formData.data.hero.title"
              />
            </div>

            <div class="flex flex-col shadow-sm space-y-2">
              <label class="text-lg font-medium" for>Hero button</label>
              <input
                class="border border-blue-50 rounded px-3 py-2"
                v-model="formData.data.hero.button"
                type="text"
                :placeholder="formData.data.hero.button"
              />
            </div>

            <div class="flex flex-col shadow-sm space-y-2">
              <label class="text-lg font-medium" for>Hero button alt</label>
              <input
                class="border border-blue-50 rounded px-3 py-2"
                v-model="formData.data.hero.button_alt"
                type="text"
                :placeholder="formData.data.hero.button_alt"
              />
            </div>
          </div>

          <div class="mt-8">
            <TipTap v-model="formData.data.hero.title" />
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

const formData = reactive({
  slug: page.value.slug,
  title: page.value.title,
  data: {
    hero: {
      title: page.value.data.hero.title,
      button: page.value.data.hero.button,
      button_alt: page.value.data.hero.button_alt,
    },
  },
})

async function updatePage() {
  const { refresh } = await useFetch(`http://localhost:3333/api/v1/pages/${route.params.slug}`, {
    method: "PATCH",
    body: formData
  })

  refresh()
}

function assignData() {
  formData.slug = page.value.slug
}
</script>