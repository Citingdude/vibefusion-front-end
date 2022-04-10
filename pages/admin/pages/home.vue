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

            <div class="space-y-4">
              <!-- title -->
              <div class="flex flex-col space-y-4 max-w-lg">
                <div class="flex flex-col shadow-sm space-y-2">
                  <div class="flex flex-col">
                    <label class="text-lg font-medium" for>Title</label>
                    <input
                      class="border border-blue-50 rounded px-3 py-2"
                      v-model="formDataHome.content.services.title"
                      type="text"
                      :placeholder="formDataHome.content.services.title"
                    />
                  </div>
                </div>
              </div>

              <!-- Service 1 -->
              <div class="flex flex-col space-y-4 max-w-lg">
                <div class="flex flex-col shadow-sm space-y-2">
                  <h3 class="text-xl font-semibold mb-2">Service 1</h3>

                  <div class="flex flex-col">
                    <label class="text-lg font-medium" for>Title</label>
                    <input
                      class="border border-blue-50 rounded px-3 py-2"
                      v-model="formDataHome.content.services.service_1.title"
                      type="text"
                      :placeholder="
                        formDataHome.content.services.service_1.title
                      "
                    />
                  </div>

                  <div class="flex flex-col">
                    <label class="text-lg font-medium" for>Button</label>
                    <input
                      class="border border-blue-50 rounded px-3 py-2"
                      v-model="formDataHome.content.services.service_1.button"
                      type="text"
                      :placeholder="
                        formDataHome.content.services.service_1.button
                      "
                    />
                  </div>
                </div>
              </div>

              <!-- Service 2 -->
              <div class="flex flex-col space-y-4 max-w-lg">
                <div class="flex flex-col shadow-sm space-y-2">
                  <h3 class="text-xl font-semibold mb-2">Service 2</h3>

                  <div class="flex flex-col">
                    <label class="text-lg font-medium" for>Title</label>
                    <input
                      class="border border-blue-50 rounded px-3 py-2"
                      v-model="formDataHome.content.services.service_2.title"
                      type="text"
                      :placeholder="
                        formDataHome.content.services.service_2.title
                      "
                    />
                  </div>

                  <div class="flex flex-col">
                    <label class="text-lg font-medium" for>Button</label>
                    <input
                      class="border border-blue-50 rounded px-3 py-2"
                      v-model="formDataHome.content.services.service_2.button"
                      type="text"
                      :placeholder="
                        formDataHome.content.services.service_2.button
                      "
                    />
                  </div>
                </div>
              </div>

              <!-- Service 3 -->
              <div class="flex flex-col space-y-4 max-w-lg">
                <div class="flex flex-col shadow-sm space-y-2">
                  <h3 class="text-xl font-semibold mb-2">Service 3</h3>

                  <div class="flex flex-col">
                    <label class="text-lg font-medium" for>Title</label>
                    <input
                      class="border border-blue-50 rounded px-3 py-2"
                      v-model="formDataHome.content.services.service_3.title"
                      type="text"
                      :placeholder="
                        formDataHome.content.services.service_3.title
                      "
                    />
                  </div>

                  <div class="flex flex-col">
                    <label class="text-lg font-medium" for>Button</label>
                    <input
                      class="border border-blue-50 rounded px-3 py-2"
                      v-model="formDataHome.content.services.service_3.button"
                      type="text"
                      :placeholder="
                        formDataHome.content.services.service_3.button
                      "
                    />
                  </div>
                </div>
              </div>

              <!-- CTA -->
              <div class="flex flex-col space-y-4 max-w-lg">
                <div class="flex flex-col shadow-sm space-y-2">
                  <h3 class="text-xl font-semibold mb-2">CTA</h3>

                  <div class="flex flex-col">
                    <label class="text-lg font-medium" for>Title</label>
                    <input
                      class="border border-blue-50 rounded px-3 py-2"
                      v-model="formDataHome.content.services.cta.title"
                      type="text"
                      :placeholder="
                        formDataHome.content.services.cta.title
                      "
                    />
                  </div>

                  <div class="flex flex-col">
                    <label class="text-lg font-medium" for>Button</label>
                    <input
                      class="border border-blue-50 rounded px-3 py-2"
                      v-model="formDataHome.content.services.service_3.button"
                      type="text"
                      :placeholder="
                        formDataHome.content.services.service_3.button
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Cta banner -->
          <div>
            <h2 class="text-2xl font-semibold mb-4">Cta banner</h2>

            <div class="flex flex-col space-y-4 max-w-lg">
              <div class="flex flex-col shadow-sm space-y-2">
                <label class="text-lg font-medium" for>Title</label>
                <TipTap v-model="formDataHome.content.cta_banner.title" />
              </div>

              <div class="flex flex-col shadow-sm space-y-2">
                <label class="text-lg font-medium" for>Body</label>
                <TipTap v-model="formDataHome.content.cta_banner.body" />
              </div>

              <div class="flex flex-col shadow-sm space-y-2">
                <label class="text-lg font-medium" for>Button</label>
                <input
                  class="border border-blue-50 rounded px-3 py-2"
                  v-model="formDataHome.content.cta_banner.button"
                  type="text"
                  :placeholder="formDataHome.content.cta_banner.button"
                />
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
  `http://localhost:3333/api/v1/pages/home`
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
      title: page.value.content?.services.title,
      service_1: {
        title: page.value.content?.services.service_1.title,
        button: page.value.content?.services.service_1.button,
      },
      service_2: {
        title: page.value.content?.services.service_2.title,
        button: page.value.content?.services.service_2.button,
      },
      service_3: {
        title: page.value.content?.services.service_3.title,
        button: page.value.content?.services.service_3.button,
      },
      cta: {
        title: page.value.content?.services.cta.title,
        button: page.value.content?.services.cta.button,
      },
    },
    cta_banner: {
      title: page.value.content?.cta_banner.title,
      body: page.value.content?.cta_banner.body,
      button: page.value.content?.cta_banner.button
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
    `http://localhost:3333/api/v1/pages/home`,
    {
      method: "PATCH",
      body: formData,
    }
  );

  refresh();
}
</script>