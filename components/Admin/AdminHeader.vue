<template>
  <header class="justify-between bg-slate-100 px-8 py-4 flex items-center shadow-md">
    <div class="w-1/2">
      <NuxtLink to="/admin">
        <BrandingAppLogo class="w-60" />
      </NuxtLink>
    </div>

    <div class="space-x-4 flex w-1/2 justify-end items-center">
      <AppButton @click="logout()" :button="true" to="/login" size="small" color="alt">Logout</AppButton>
    </div>
  </header>
</template>

<script setup>
const cookieToken = useCookie("token");
const runtimeConfig = useRuntimeConfig()
const apiBase = runtimeConfig.apiBase

async function logout() {
  await useFetch(`${apiBase}/logout`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cookieToken.value}`,
    }
  }).then(() => {
    return navigateTo("/login");
  })
}
</script>