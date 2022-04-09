<template>
  <section id="onze-diensten" class="bg-light-alt">
    <div
      class="
        container
        mx-auto
        flex flex-col
        py-24
        section-padding-x
        justify-center
        items-center
      "
    >
      <div class="flex flex-col items-center mb-8">
        <h2 class="text-2xl lg:text-5xl font-bold font-display mb-3">
          Onze diensten
        </h2>
      </div>

      <div class="grid grid-cols-2 gap-4 lg:gap-8 max-w-5xl w-full">
        <div
          class="
            flex flex-col
            justify-center
            items-center
            bg-light-main
            col-span-2
            md:col-span-1
            p-12
            rounded-tl-3xl rounded-br-3xl
            anim-fade-in-up
          "
        >
          <IconsWebdesign />

          <h3 class="font-display font-bold text-3xl my-8">Webdesign</h3>

          <ButtonsButtonLargeAlt
            text="Meer info"
            :link="{ path: '/', hash: '#onze-diensten' }"
          />
        </div>

        <div
          class="
            flex flex-col
            justify-center
            items-center
            bg-light-main
            col-span-2
            md:col-span-1
            p-12
            rounded-tr-3xl rounded-bl-3xl
            anim-fade-in-up
          "
        >
          <IconsWebshop />

          <h3 class="font-display font-bold text-3xl my-8">Webshop</h3>

          <ButtonsButtonLargeAlt
            text="Meer info"
            :link="{ path: '/', hash: '#onze-diensten' }"
          />
        </div>

        <div
          class="
            flex flex-col
            justify-center
            items-center
            bg-light-main
            col-span-2
            md:col-span-1
            p-12
            rounded-tr-3xl rounded-bl-3xl
            anim-fade-in-up
          "
        >
          <IconsBranding />

          <h3 class="font-display font-bold text-3xl my-8">Branding</h3>

          <ButtonsButtonLargeAlt
            text="Meer info"
            :link="{ path: '/', hash: '#onze-diensten' }"
          />
        </div>

        <div
          class="
            flex flex-col
            justify-center
            items-center
            bg-dark-300
            col-span-2
            md:col-span-1
            p-12
            rounded-tl-3xl rounded-br-3xl
            anim-fade-in-up
          "
        >
          <h3
            class="
              font-display font-bold
              text-3xl
              lg:text-4xl
              mb-8
              text-light-main
            "
          >
            Samenwerken?
          </h3>

          <ButtonsButtonLargeMain
            text="Contacteer ons"
            :link="{ path: '/', hash: '#onze-diensten' }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: home } = await useAsyncData("home", () =>
  $fetch("http://localhost:3333/api/v1/pages")
);
</script>