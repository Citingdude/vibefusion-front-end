<template>
  <div>
    <h1>Admin dashboard</h1>
  </div>
</template>

<script setup>
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