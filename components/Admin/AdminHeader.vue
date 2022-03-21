<template>
  <div>
    <header class="bg-slate-100 px-8 py-4 flex justify-between">
      <AppLogo class="w-40" />

      <div class="space-x-8 flex">
        <NuxtLink to="/login">Login</NuxtLink>
        <button @click="logout()">Logout</button>
      </div>
    </header>
  </div>
</template>

<script setup>

</script>