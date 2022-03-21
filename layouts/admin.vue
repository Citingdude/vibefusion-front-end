<script setup>
import AppLogo from "~~/components/branding/AppLogo.vue";
import { store } from "@/store/store";

async function logout() {
  await setValidToken().then(() => {
    return navigateTo("/login");
  });
}

async function setValidToken() {
  store.user.validToken = false;
}
</script>

<template>
  <div class="min-h-screen">
    <AdminHeader />

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