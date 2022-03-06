<template>
  <div>
    <div>{{ home?.data?.hero?.title }}</div>
    <ul>
      <li v-for="(page, index) in pages" :key="index">
        {{ page }}
      </li>
    </ul>
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

const {
  data: pages
} = await useFetch(
  'http://localhost:3333/api/v1/pages'
)
</script>