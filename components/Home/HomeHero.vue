<template>
  <section
    class="container mx-auto pt-20 lg:pt-32 lg:pb-40 bg-left bg-no-repeat bg-cover section-padding-x"
  >
    <div class="content-container items-center">
      <div class="grid grid-cols-2 lg:grid-cols-12 gap-12">
        <div class="col-span-2 lg:col-span-6 max-w-full items-center anim-fade-in-left">
          <h1
            v-html="home[0].data.hero.title"
            class="hero__title text-7xl font-display mb-24"
          ></h1>

          <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
            <ButtonsButtonLargeMain
              :text="home[0].data.hero.button"
              :link="{ path: '/', hash: '#onze-diensten' }"
            />
            <ButtonsButtonLargeAlt
              :text="home[0].data.hero.button_alt"
              :link="{ path: '/', hash: '#cases' }"
            />
          </div>
        </div>

        <div class="col-span-2 lg:col-span-6 anim-fade-in-right">
          <img width="100%" height="auto" src="~/assets/images/home-hero.svg" alt="Hero" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: home } = await useAsyncData('home', () => $fetch('http://localhost:3333/api/v1/pages'))

</script>

<style>
.hero__title > p {
  font-weight: normal;
}
</style>