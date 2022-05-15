<template>
  <div>
    <!-- Hero -->
    <section class="pt-16 lg:pt-32 pb-20 lg:pb-40 section-padding-x">
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
          <img src="~/assets/images/webshop-illustration.svg" alt="" />
        </div>
      </div>
    </section>

    <!-- Affordable -->
    <section
      class="bg-light-alt pt-16 lg:pt-32 pb-20 lg:pb-40 section-padding-x"
    >
      <div class="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div>
          <LayoutHeading title="Focus op betaalbaar" class="items-start mb-8" />

          <!-- Body -->
          <p class="text-lg">
            Om onze webshops betaalbaar te houden voor kleinere ondernemingen
            hebben we er voor gekozen om deels te werken met voorgebouwde
            technische elementen.
            <br />
            <br />
            Dit zijn elementen zoals productfiltering, zoekfuncties,
            productiegalerijen, accountpagina's en menusystemen.
            <br />
            <br />
            Alle visuele elementen blijven zelf ontworpen door ons zodat jouw
            webshop uniek is en bij je merk past!
          </p>
        </div>

        <!-- Image -->
        <div>
          <img
            class="rounded-tl-4xl rounded-br-4xl shadow-2xl max-w-full"
            src="~/assets/images/betaalbaar.jpg"
            alt="Betaalbare webshop"
          />
        </div>
      </div>
    </section>

    <!-- Easy -->
    <section
      class="bg-light-main pt-16 lg:pt-32 pb-20 lg:pb-40 section-padding-x"
    >
      <div class="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <!-- Image -->
        <div class="order-2 sm:order-1">
          <img
            class="rounded-tl-4xl rounded-br-4xl shadow-2xl max-w-full"
            src="~/assets/images/eenvoudig.jpeg"
            alt="Eenvoudig beheer"
          />
        </div>

        <!-- Content -->
        <div class="order-1 sm:order-2">
          <LayoutHeading
            title="Gebruiksvriendelijke beheer"
            class="items-start mb-8"
          />

          <!-- Body -->
          <p class="text-lg">
            We bouwen al onze webshops op in WordPress. Dit heeft als voordeel
            dat het gebruiksvriendelijke Content Management Systeem van
            WordPress ook voor je webshop ter beschikking staat.
            <br /><br />
            Zo beheer je zelf eenvoudig je producten, bestellingen,
            kortingsbonnen, voorraad en nog veel meer.
          </p>
        </div>
      </div>
    </section>

    <!-- Cta -->
    <section class="bg-dark-300 py-20 lg:py-24 section-padding-x">
      <div class="flex flex-col items-center container mx-auto">
        <LayoutHeading
          class="text-light-main text-center mb-12"
          title="Jouw webshop starten?"
        />

        <AppButton color="transparent-alt">
          Vraag een vrijblijvend gesprek aan
        </AppButton>
      </div>
    </section>

    <!-- Integrations -->
    <section
      class="bg-light-alt py-16 lg:py-32 section-padding-x"
    >
      <div class="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div>
          <LayoutHeading
            title="Integraties en uitbreidingen"
            class="items-start mb-8"
          />

          <!-- Body -->
          <p class="text-lg">
            Om onze webshops betaalbaar te houden voor kleinere ondernemingen
            hebben we er voor gekozen om deels te werken met voorgebouwde
            technische elementen.
            <br /><br />
            Dit zijn elementen zoals productfiltering, zoekfuncties,
            productiegalerijen, accountpagina's en menusystemen.
            <br /><br />
            Alle visuele elementen blijven zelf ontworpen door ons zodat jouw
            webshop uniek is en bij je merk past!
          </p>
        </div>

        <!-- Image -->
        <div>
          <img
            class="rounded-tl-4xl rounded-br-4xl shadow-2xl max-w-full"
            src="~/assets/images/integraties.jpeg"
            alt="Betaalbare webshop"
          />
        </div>
      </div>
    </section>

    <!-- Responsive -->
    <section
      class="bg-light-main py-16 lg:py-32 section-padding-x"
    >
      <div class="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <!-- Image -->
        <div class="order-2 sm:order-1">
          <img
            class="rounded-tl-4xl rounded-br-4xl shadow-2xl max-w-full"
            src="~/assets/images/eenvoudig.jpeg"
            alt="Eenvoudig beheer"
          />
        </div>

        <!-- Content -->
        <div class="order-1 sm:order-2">
          <LayoutHeading title="Mobielvriendelijk" class="items-start mb-8" />

          <!-- Body -->
          <p class="text-lg">
            Steeds meer mensen surfen en kopen via de smartphone of tablet. Het
            is daarom enorm belangrijk dat jouw webshop ook op smartphones en
            tablets volledig functioneert én de bezoeker een goede
            gebruikservaring levert.
            <br /><br />
            Al onze webshops zijn volledig responsief opgebouwd zodat jouw
            toekomstige klanten ook via de smartphone of tablet moeiteloos hun
            aankopen kunnen doen.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>
