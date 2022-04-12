<template>
  <div class="flex flex-col w-full bg-slate-50 p-8">
    <h1 class="text-3xl font-bold mb-4">{{ casePage.title }}</h1>

    <div>
      <div class="mt-8">
        <form class="space-y-8" @submit.prevent="updatePage()">
          <!-- Meta -->
          <div>
            <h2 class="text-2xl font-semibold mb-4">Meta</h2>

            <div class="flex flex-col space-y-4 max-w-lg">
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
                  :placeholder="casePage.category"
                />
              </div>

              <!-- Title -->
              <div class="flex flex-col shadow-sm space-y-2">
                <label class="text-lg font-medium" for>Title</label>
                <input
                  class="border border-blue-50 rounded px-3 py-2"
                  v-model="formDataCase.title"
                  type="text"
                  :placeholder="casePage.title"
                />
              </div>

              <!-- Description -->
              <div class="flex flex-col shadow-sm space-y-2">
                <label class="text-lg font-medium" for>Description</label>

                <TipTap v-model="formDataCase.description" />
              </div>

              <!-- Image -->
              <div class="flex flex-col shadow-sm space-y-2">
                <label class="text-lg font-medium" for>Image</label>
                <input
                  class="border border-blue-50 rounded px-3 py-2"
                  type="file"
                  id="file"
                  ref="file"
                  v-on:change="handleFileUpload()"
                />

                <div>
                  {{ formDataCase.image }}

                  <img :src="`http://localhost:3333/uploads/${formDataCase.image}`" alt="">
                </div>
              </div>
            </div>
          </div>

          <!-- Content -->

          <!-- Save button -->
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

const runtimeConfig = useRuntimeConfig()
const apiBase = runtimeConfig.apiBase

const route = useRoute();

const { data: casePage } = await useFetch(
  `${apiBase}/cases/${route.params.slug}`
);

definePageMeta({
  layout: "admin",
  middleware: "auth",
});

const file = ref(null);

const formDataCase = reactive({
  slug: casePage.value.slug,
  category: casePage.value.category,
  title: casePage.value.title,
  description: casePage.value.description,
  image: casePage.value.image,
  content: {
  },
});

function handleFileUpload() {
  console.log(file.value.files[0]);
}

async function updatePage() {
  var formData = new FormData();

  formData.append("featured_image", file.value.files[0]);
  formData.append("slug", formDataCase.slug)
  formData.append("category", formDataCase.category)
  formData.append("title", formDataCase.title)
  formData.append("description", formDataCase.description)
  formData.append("image", formDataCase.image)
  formData.append("content", JSON.stringify(formDataCase.content))

  const { data, refresh } = await useFetch(
    `${apiBase}/cases/${route.params.slug}`,
    {
      method: "PATCH",
      body: formData,
    }
  );

  refresh()
}
</script>