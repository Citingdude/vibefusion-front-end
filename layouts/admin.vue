<template>
  <div class="min-h-screen">
    <AdminHeader />

    <main class="flex">
      <AdminNavigation />

      <div class="flex w-10/12">
        <slot />
      </div>
    </main>
  </div>
</template>