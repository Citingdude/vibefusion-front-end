<template>
  <section id="cases" class="section-padding-x">
    <div class="flex flex-col py-24 container mx-auto justify-center items-center">
      <!-- Section heading -->
      <div class="flex flex-col items-center mb-8">
        <h2 class="text-2xl lg:text-5xl font-bold font-display mb-4">Cases</h2>

        <IconsLine />
      </div>

      <!-- Cases -->
      <div>
        <CasesCard
          :badgeText="'Blog'"
          :title="'Explauradise'"
          :summary="`Een <strong>visuele website</strong> met prachtige natuurfoto's en avontuurlijke blog voor een <strong>succesvolle Instagrammer</strong> met meer dan 10.000 volgers.`"
          :image="'https://vibefusion-demo.be/wp-content/uploads/2021/11/Mockups-s-v2.jpg'"
          buttonLink="/"
        />

        <CasesCard
          :badgeText="'Business website'"
          :title="'VDR Chemtech'"
          :summary="`Een <strong>professionele business website</strong> voor een internationale speler in de petrochemie sector.`"
          :image="'https://vibefusion-demo.be/wp-content/uploads/2021/11/Mockups-s-v2-1.jpg'"
          buttonLink="/"
          :imageOrder="'order-2'"
          :contentOrder="'order-1'"
        />
      </div>
    </div>
  </section>
</template>