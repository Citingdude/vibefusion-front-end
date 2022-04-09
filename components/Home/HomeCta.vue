<template>
  <section class="flex section-padding-x bg-dark-300 justify-center">
    <div class="flex flex-col py-20 content-container">
      <div class="flex flex-col mb-4">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-3 text-light-main"
        >Samenwerken voor jouw volgend project?</h2>
      </div>
      <p class="font-body text-light-alt mb-8 text-base md:text-lg lg:text-xl">
        Heb je nood aan een nieuwe
        <NuxtLink to="/webdesign" class="text-accent link-hover-border ease-in">website</NuxtLink>,
        <NuxtLink to="/webshop" class="text-accent link-hover-border">webshop</NuxtLink>of
        <NuxtLink to="/branding" class="text-accent link-hover-border">branding</NuxtLink>?
        <br />We helpen je graag verder met jouw toekomstige projecten!
      </p>

      <AppButton color="transparent-alt" to="contact">Vraag een vrijblijvend gesprek aan</AppButton>
    </div>
  </section>
</template>