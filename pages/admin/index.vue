<template>
  <div>
    <h1 class="text-3xl">Admin dashboard</h1>
  </div>
</template>

<script setup>

const runtimeConfig = useRuntimeConfig()
const apiBase = runtimeConfig.apiBase

definePageMeta({
  layout: "admin",
  middleware: 'auth'
})

const { 
  data: home 
} = await useFetch(
  `${apiBase}/pages/home`, 
  { pick: 
      [
        'title', 
        'slug', 
        'data'
      ] 
  }
)
</script>