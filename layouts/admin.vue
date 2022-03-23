<template>
  <div class="min-h-screen">
    <AdminHeader />

    <main class="flex">
      <AdminNavigation />

      <div class="flex w-10/12 bg-slate-50 p-8">
        <slot />
      </div>
    </main>
  </div>
</template>