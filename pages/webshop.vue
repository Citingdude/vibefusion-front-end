<template>
  <div>
    <!-- Hero -->
    <section
      class="pt-16 lg:pt-32 pb-20 lg:pb-40 section-padding-x"
    >
      <div class="container mx-auto grid lg:grid-cols-2 gap-16">
        <!-- Content -->
        <div>
          <h1 class="text-4xl lg:text-5xl font-bold font-display mb-4">
            Verkoop eenvoudig online met een betaalbare webshop
          </h1>

          <p class="mb-12 text-lg">
            Wil je ook meeprofiteren van het steeds groter wordend succes van de
            E-commerce? Wij helpen je graag verder in het bouwen van een
            betaalbare en conversiegerichte webshop die functioneert op alle
            schermen.
          </p>

          <!-- Button -->
          <div class="flex">
            <AppButton to="contact">Start jouw webshop</AppButton>
          </div>
        </div>

        <!-- Illustration -->
        <div>
          <img
            class="max-w-lg"
            src="~/assets/images/webshop-illustration.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>
