<template>
  <div class="hover:-translate-y-4 transition-transform">
    <NuxtLink to="/blog/test" class="shadow-2xl">
      <!-- Image -->
      <div>
        <img
          class="rounded-tl-4xl"
          src="~/assets/images/google-mijn-bedrijf.png"
          alt=""
        />
      </div>

      <!-- Content -->
      <div class="p-8 bg-dark-300 rounded-br-4xl">
        <h3 class="text-light-main font-display text-3xl font-medium mb-8">
          Google mijn bedrijf: De volledige handleiding
        </h3>

        <div class="flex">
          <AppButton to="/blog/test" color="transparent-alt">Lees de blog</AppButton>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup></script>
