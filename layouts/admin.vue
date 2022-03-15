<script setup>
import AppLogo from "~~/components/branding/AppLogo.vue";
import { store } from '@/store/store'

function logout() {
  store.logout()

  return navigateTo('/login')
}
</script>

<template>
  <div class="min-h-screen">
    <header class="bg-slate-100 px-8 py-4 flex justify-between">
      <AppLogo class="w-40" />

      <div class="space-x-8 flex">
        <NuxtLink to="/login">Login</NuxtLink>
        <button @click="logout()">Logout</button>
      </div>
    </header>

    <main class="flex">
      <aside class="bg-slate-200 min-h-screen flex w-2/12">
        <div class="flex flex-col w-full">
          <NuxtLink
            to="/admin"
            class="px-8 py-4 bg-slate-300 hover:bg-slate-400 w-full"
            >Dashboard</NuxtLink
          >

          <NuxtLink
            to="/admin/pages"
            class="px-8 py-4 bg-slate-300 hover:bg-slate-400"
            >Pages</NuxtLink
          >
        </div>
      </aside>

      <div class="flex w-10/12">
        <slot />
      </div>
    </main>
  </div>
</template>