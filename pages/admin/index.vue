<template>
  <div>
    <h1 class="text-3xl">Admin dashboard</h1>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  middleware: 'auth'
})

const { 
  data: home 
} = await useFetch(
  'http://localhost:3333/api/v1/pages/home', 
  { pick: 
      [
        'title', 
        'slug', 
        'data'
      ] 
  }
)
</script>