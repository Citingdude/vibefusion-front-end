<template>
  <header class="justify-between bg-slate-100 px-8 py-4 flex items-center shadow-md">
    <div class="w-1/2">
      <NuxtLink to="/admin">
        <BrandingAppLogo class="w-60" />
      </NuxtLink>
    </div>

    <div class="space-x-4 flex w-1/2 justify-end items-center">
      <AppButton to="/login" size="small">Login</AppButton>
      <AppButton @click="logout()" :button="true" to="/login" size="small" color="alt">Logout</AppButton>
    </div>
  </header>
</template>

<script setup>
import { store } from "@/store/store";

async function setValidToken() {
  store.user.validToken = false;
}

async function logout() {
  await setValidToken().then(() => {
    return navigateTo("/login");
  });
}
</script>