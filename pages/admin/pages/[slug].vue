<template>
  <div class="flex flex-col w-full bg-slate-50 p-8">
    <h1 class="text-3xl font-bold mb-4">
      Page: {{ $route.params.slug }}
    </h1>

    <div>
      <p>
        Title: {{ page.title }}
      </p>

      <p>
        Slug: {{ page.slug }}
      </p>

      <p>
        Hero title: {{ page.data.hero.title }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const route = useRoute()

definePageMeta({
  layout: "admin",
});

const { data: page } = await useFetch(`http://localhost:3333/api/v1/pages/${route.params.slug}`);
</script>