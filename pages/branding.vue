<template>
  <div>
    <!-- Hero -->
    <section class="pt-16 lg:pt-32 pb-20 lg:pb-40 section-padding-x">
      <div class="container mx-auto grid lg:grid-cols-2 gap-16">
        <!-- Content -->
        <div>
          <h1 class="text-4xl lg:text-5xl font-bold font-display mb-4">
            Overtuig je klanten met een sterke branding
          </h1>

          <p class="mb-12 text-lg">
            Een goede branding is meer dan alleen een logo. Het bestaat uit
            verschillende elementen die elkaar versterken. Samen hebben ze het
            doel om jouw merk te onderscheiden van de concurrentie en je bedrijf
            te positioneren voor de juiste doelgroep.
            <br /><br />
            Wij helpen je verder met het ontwerp van een krachtige branding die
            jouw bedrijf naar een hoger niveau tilt.
          </p>

          <!-- Button -->
          <div class="flex">
            <AppButton hashlink="branding-package"
              >Ontdek het branding pakket</AppButton
            >
          </div>
        </div>

        <!-- Illustration -->
        <div>
          <img src="~/assets/images/branding-illustration.svg" alt="" />
        </div>
      </div>
    </section>

    <!-- Branding package -->
    <section
      id="branding-package"
      class="bg-light-alt py-16 lg:py-32 section-padding-x"
    >
      <div class="container mx-auto">
        <LayoutHeading
          class="text-center mb-16"
          title="Een compleet branding pakket"
        />

        <!-- Content -->
        <div class="grid gap-24">
          <!-- Logo -->
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <LayoutHeading class="items-start mb-8" title="Logo" size="h3" />

              <p class="text-lg">
                Het logo is één van de belangrijkste elementen van een merk. Het
                moet onderscheidend, herkenbaar en duidelijk zijn. De beste
                logo's lijken vaak zeer eenvoudig, maar zijn altijd zeer
                doordacht door middel van veel research en brainstormsessies.
                <br /><br />
                We ontwerpen een logo voor jouw merk dat je onderscheidt van de
                concurrentie, de juiste vibe geeft bij je klanten en duidelijk
                blijft in kleine en grote formaten.
              </p>
            </div>

            <div>
              <img
                class="rounded-tr-4xl rounded-bl-4xl"
                src="~/assets/images/branding-logo.jpeg"
                alt="Logo design"
              />
            </div>
          </div>

          <!-- Kleurenpalet -->
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                class="rounded-tl-4xl rounded-br-4xl"
                src="~/assets/images/kleurenpalet.jpeg"
                alt="Kleurenpalet"
              />
            </div>

            <div>
              <LayoutHeading
                class="items-start mb-8"
                title="Kleurenpalet"
                size="h3"
              />

              <p class="text-lg">
                Elke kleur brengt een bepaalde emotie naar boven. Zo straalt
                blauw vertrouwen uit en straalt rood passie uit. De juiste
                kleuren kiezen die passen bij je merk is geen eenvoudige
                opdracht. Zo moeten alle kleuren bij elkaar passen, het juiste
                gevoel uitstralen en ook nog eens genoeg contrast creëren.
                <br /><br />
                Wij onderzoeken grondig welke kleuren bij jouw merk passen en
                stellen een functioneel kleurenpalet samen dat de juiste vibe
                uitstraalt.
              </p>
            </div>
          </div>

          <!-- Logo -->
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <LayoutHeading
                class="items-start mb-8"
                title="Typografie"
                size="h3"
              />

              <p class="text-lg">
                Een vaak onderschat element van een merk is de typografie. Het
                is één van de elementen die je merk kan maken of breken. Een
                serieus business merk dat professionaliteit wilt uitstralen
                kiest bijvoorbeeld beter niet voor een organisch en fun
                lettertype.
                <br /><br />
                Ook hier starten we bij het gevoel dat je als merk wilt
                overdragen aan je klanten. Daarna researchen we de concurrentie
                en verschillende potentiële lettertypes die over de juiste stijl
                beschikken.
              </p>
            </div>

            <div>
              <img
                class="rounded-tr-4xl rounded-bl-4xl"
                src="~/assets/images/typografie.jpeg"
                alt="Typografie"
              />
            </div>
          </div>

          <!-- Steunelementen -->
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                class="rounded-tl-4xl rounded-br-4xl"
                src="~/assets/images/steunelementen.jpeg"
                alt="Steunelementen"
              />
            </div>

            <div>
              <LayoutHeading
                class="items-start mb-8"
                title="Steunelementen"
                size="h3"
              />

              <p class="text-lg">
                Om je merk echt tot leven te brengen ontwerpen we
                steunelementen. Dit zijn bijvoorbeeld patronen, icoontjes en
                vormen.
                <br /><br />
                We zorgen er altijd voor dat deze steunelementen bij je
                volledige branding passen. Met de juiste steunelementen zal je
                jouw merk nog meer onderscheiden van de concurrentie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="bg-dark-300 py-16 lg:py-32 section-padding-x">
      <div class="flex flex-col items-center container mx-auto">
        <LayoutHeading
          class="text-center text-light-main mb-16"
          title="Voordelen van een sterke branding"
        />

        <!-- Benefits -->
        <div class="grid lg:grid-cols-2 gap-y-8 gap-x-32 max-w-6xl">
          <BenefitsItem title="Vergroot de merkherkenbaarheid" />
          <BenefitsItem title="Creëert duidelijkheid" />
          <BenefitsItem title="Straalt professionaliteit uit" />
          <BenefitsItem title="Onderscheidt je van de concurrentie" />
          <BenefitsItem title="Versterkt de verbondenheid met de klant" />
          <BenefitsItem title="Start jouw branding project" type="cta" to="/contact" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>
