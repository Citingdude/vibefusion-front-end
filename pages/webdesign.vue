<template>
  <div>
    <!-- Hero -->
    <section
      class="container mx-auto pt-16 lg:pt-32 pb-20 lg:pb-40 bg-left bg-no-repeat bg-cover section-padding-x grid lg:grid-cols-2 gap-16"
    >
      <!-- Content -->
      <div>
        <h1 class="text-4xl lg:text-5xl font-bold font-display mb-4">
          Scoor online met een conversiegerichte website
        </h1>

        <p class="mb-12 text-lg">
          Een professionele business website wordt een steeds belangrijker
          digitaal kanaal dat voor klanten zorgt. Start vandaag nog met de
          digitalisering van je bedrijf en zorg er voor dat jouw klanten je ook
          online kunnen vinden.
        </p>

        <!-- Buttons -->
        <div
          class="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-8"
        >
          <AppButton>Ontdek onze kwaliteiten</AppButton>
          <AppButton color="transparent">Vraag een gesprek aan</AppButton>
        </div>
      </div>

      <!-- Illustration -->
      <div>
        <img
          class="max-w-lg"
          src="~/assets/images/webdesign-illustratie.svg"
          alt=""
        />
      </div>
    </section>

    <!-- Features -->
    <section
      class="pt-16 lg:pt-32 pb-20 lg:pb-40 section-padding-x bg-light-alt"
    >
      <div class="container mx-auto">
        <!-- Heading -->
        <div class="flex flex-col items-center w-full mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold font-display mb-4">
            Waarom VibeFusion?
          </h2>

          <IconsLine />
        </div>

        <!-- Features grid -->
        <div class="grid gap-8 xl:grid-cols-3">
          <FeaturesCard
            icon="rocket"
            title="Topperformance"
            body="Een snelle website wordt steeds belangrijker voor zoekmachines zoals Google. We optimaliseren jouw website grondig voor een optimale performance. Elke website wordt ook uitvoerig getest met de bekende Pagespeed test van Google."
          />
          <FeaturesCard
            icon="target"
            color="light"
            title="Conversiegericht"
            body="We starten al onze projecten met de vraag wat het doel van de website is. Zo kunnen we de website doelgericht opbouwen. We stellen ook de juiste Analytics in voor jouw website zodat je eenvoudig belangrijke data zoals conversies en bezoekers kan meten."
          />
          <FeaturesCard
            icon="search"
            title="SEO optimalisatie"
            body="Naast de snelheid van een website zijn er nog een aantal technische aspecten die een impact hebben op de vindbaarheid van je website. We zorgen er voor dat deze tip top in orde zijn zodat Google jouw website niet afstraft."
          />
          <FeaturesCard
            icon="brush"
            color="light"
            title="Custom design"
            body="Elke website die wij bouwen start vanuit een wit blad. We zijn niet afhankelijk van beperkte templates of functionaliteiten en maken jouw website uniek en conversiegericht. Zo onderscheiden we jouw website van de concurrentie."
          />
          <FeaturesCard
            icon="phone"
            title="Mobielvriendelijk"
            body="Een mobielvriendelijke website is tegenwoordig een must. Wanneer je website niet mobielvriendelijk is, zal Google je genadeloos straffen in de vindbaarheid van je website. Daarom bouwen we elke website op met de nieuwste responsieve technieken."
          />
          <FeaturesCard
            type="cta"
            color="dark"
            title="Samenwerken?"
            borders="tl-br"
          />
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section class="pt-16 lg:pt-32 pb-20 lg:pb-40 section-padding-x">
      <div class="container mx-auto">
        <!-- Heading -->
        <div class="flex flex-col items-center w-full mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold font-display mb-4">
            Recente projecten
          </h2>

          <IconsLine />
        </div>

        <!-- Cases -->
        <div>
          <CasesCard
            v-for="(casePage, index) in cases"
            :key="casePage.id"
            :badgeText="casePage.attributes.category.data.attributes.Title"
            :title="casePage.attributes.Title"
            :summary="casePage.attributes.summary"
            :image="`${baseUrl}${casePage.attributes.Image.data.attributes.url}`"
            :link="`/cases/${casePage.attributes.slug}`"
            :imageOrder="{ 'order-2': index % 2 === 0 }"
            :contentOrder="{ 'order-1': index % 2 === 0 }"
          />
        </div>
      </div>
    </section>

    <!-- Roadmap -->
    <section
      class="pt-16 lg:pt-32 pb-20 lg:pb-40 section-padding-x bg-light-alt xl:px-20"
    >
      <div class="container mx-auto">
        <!-- Heading -->
        <div class="flex flex-col items-center w-full mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold font-display mb-4">
            Hoe verloopt het proces?
          </h2>

          <IconsLine />
        </div>

        <!-- Roadmap -->
        <div class="flex flex-col space-y-8">
          <RoadmapStep
            title="Kennismakingsgesprek"
            content="Elke potentieel project starten we met een vrijblijvend kennismakingsgesprek. We vinden het zeer belangrijk dat we de core business van je bedrijf goed begrijpen en dat onze waardes met elkaar overeen komen."
            number="1"
          />
          <RoadmapStep
            direction="reverse"
            title="Projectbespreking & planning"
            content="Wanneer je er voor kiest om samen met ons in zee te gaan, bespreken we uitvoerig het volledige traject. Zo bekijken we samen hoe lang het traject zal duren en op welke momenten we zullen afleveren."
            number="2"
          />
          <RoadmapStep
            title="Designfase"
            content="In de designfase werken we het volledige design van jouw website uit. We beginnen altijd met de homepage en vragen goedkeuring van het design om de look & feel vast te leggen. Wanneer de algemene look en feel juist zit, designen we de resterende pagina's."
            number="3"
          />
          <RoadmapStep
            direction="reverse"
            title="Review & testing"
            content="Wanneer de website is opgebouwd houden we nog een laatste feedbackronde om alle details op punt te stellen. Als alles is goedgekeurd, testen we de website nog uitvoerig zodat we zeker weten dat alles goed functioneert."
            number="4"
          />
          <RoadmapStep
            title="Oplevering website & opvolging"
            content="Tot slot leveren we de website af en volgen we nog voor een bepaalde periode alles op. Alle schoonheidsfoutjes werken we gratis voor je weg. Na deze periode kan je er voor kiezen om verder met ons in zee te gaan door het websitebeheer aan ons uit te besteden."
            number="5"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import * as qs from "qs";

const runtimeConfig = useRuntimeConfig();
const apiBase = runtimeConfig.apiBase;
const baseUrl = runtimeConfig.baseUrl;

const caseQuery = qs.stringify(
  {
    populate: "*",
  },
  {
    encodeValuesOnly: true,
  }
);

const { data } = await useAsyncData("cases", () =>
  $fetch(`${apiBase}/cases?${caseQuery}`)
);

const cases = data.value.data.slice(0, 2);
</script>
