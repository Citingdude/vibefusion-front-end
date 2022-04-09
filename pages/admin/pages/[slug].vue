<template>
  <div class="flex flex-col w-full bg-slate-50 p-8">
    <h1 class="text-3xl font-bold mb-4">{{ page.title }}</h1>

    <div>
      <div class="mt-8">
        <form class="space-y-8" @submit.prevent="updatePage()">
          <!-- Meta -->
          <div>
            <h2 class="text-2xl font-semibold mb-4">Meta</h2>

            <div class="flex flex-col space-y-4 max-w-lg">
              <div class="flex flex-col shadow-sm space-y-2">
                <label class="text-lg font-medium" for>Slug</label>
                <input
                  class="border border-blue-50 rounded px-3 py-2"
                  v-model="formDataHome.slug"
                  type="text"
                />
              </div>

              <div class="flex flex-col shadow-sm space-y-2">
                <label class="text-lg font-medium" for>Title</label>
                <input
                  class="border border-blue-50 rounded px-3 py-2"
                  v-model="formDataHome.title"
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
            </div>
          </div>

          <!-- Hero -->
          <div>
            <h2 class="text-2xl font-semibold mb-4">Hero</h2>

            <div class="flex flex-col space-y-4 max-w-lg">
              <div class="flex flex-col shadow-sm space-y-2">
                <TipTap v-model="formDataHome.content.hero.title" />
              </div>

              <div class="flex flex-col shadow-sm space-y-2">
                <label class="text-lg font-medium" for>Hero button</label>
                <input
                  class="border border-blue-50 rounded px-3 py-2"
                  v-model="formDataHome.content.hero.button"
                  type="text"
                  :placeholder="formDataHome.content.hero.button"
                />
              </div>

              <div class="flex flex-col shadow-sm space-y-2">
                <label class="text-lg font-medium" for>Hero button alt</label>
                <input
                  class="border border-blue-50 rounded px-3 py-2"
                  v-model="formDataHome.content.hero.button_alt"
                  type="text"
                  :placeholder="formDataHome.content.hero.button_alt"
                />
              </div>
            </div>
          </div>

          <!-- Services -->
          <div>
            <h2 class="text-2xl font-semibold mb-4">Services</h2>

            <div class="flex flex-col space-y-4 max-w-lg">
              <div class="flex flex-col shadow-sm space-y-2">
                <h3 class="text-xl font-semibold mb-2">Service 1</h3>

                <div class="flex flex-col">
                  <label class="text-lg font-medium" for>Title</label>
                  <input
                    class="border border-blue-50 rounded px-3 py-2"
                    v-model="formDataHome.content.services.service_1.title"
                    type="text"
                    :placeholder="formDataHome.content.services.service_1.title"
                  />
                </div>

                <div class="flex flex-col">
                  <label class="text-lg font-medium" for>Button</label>
                  <input
                    class="border border-blue-50 rounded px-3 py-2"
                    v-model="formDataHome.content.services.service_1.button"
                    type="text"
                    :placeholder="formDataHome.content.services.service_1.button"
                  />
                </div>
              </div>
            </div>
          </div>

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

const route = useRoute();

const { data: page } = await useFetch(
  `http://localhost:3333/api/v1/pages/${route.params.slug}`
);

definePageMeta({
  layout: "admin",
  middleware: "auth",
});

const file = ref(null);

const formDataHome = reactive({
  slug: page.value.slug,
  title: page.value.title,
  image: "",
  content: {
    hero: {
      title: page.value.content?.hero.title,
      button: page.value.content?.hero.button,
      button_alt: page.value.content?.hero.button_alt,
    },
    services: {
      service_1: {
        title: page.value.content?.services.service_1.title,
        button: page.value.content?.services.service_1.button
      }
    }
  },
});

function handleFileUpload() {
  console.log(file.value.files[0]);
}

async function updatePage() {
  var formData = new FormData();

  formData.append("file", file.value.files[0]);
  formData.append("slug", formDataHome.slug);
  formData.append("title", formDataHome.title);
  formData.append("content", JSON.stringify(formDataHome.content));

  const { data, refresh } = await useFetch(
    `http://localhost:3333/api/v1/pages/${route.params.slug}`,
    {
      method: "PATCH",
      body: formData,
    }
  );

  refresh();
}
</script>