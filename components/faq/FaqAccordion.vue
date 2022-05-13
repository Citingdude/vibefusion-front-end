<template>
  <div
    class="bg-dark-300 p-6 space-y-2 rounded-tr-3xl rounded-bl-3xl sm:p-16 sm:rounded-tr-8xl sm:space-y-4 sm:rounded-bl-8xl"
  >
    <FaqAccordionQuestion
      :open="true"
      question="Hoeveel kost een website?"
      answer="De prijs van een WordPress website is sterk afhankelijk van de gewenste functionaliteiten en het aantal pagina’s. Bij VibeFusion start de prijs van een website vanaf 2.000 euro."
    />
    <FaqAccordionQuestion
      question="Hoelang duurt het bouwen van een website?"
      answer="Afhankelijk van de grootte en functionaliteiten van de website mikken we voor de gemiddelde WordPress website op 4 weken. De snelheid van het aanleveren van de content heeft hier ook een grote invloed op. Hoe sneller we de content aangeleverd krijgen hoe sneller we kunnen beginnen."
    />
    <FaqAccordionQuestion
      question="Wat is een CMS-systeem?"
      answer="Een Content Management Systeem is een software die het mogelijk maakt om content van een website op een gebruiksvriendelijke manier te beheren. Een bekend voorbeeld hiervan is het ingebouwd blogsysteem van WordPress waarmee je zonder code nieuwe blogs kan publiceren"
    />
    <FaqAccordionQuestion
      question="Kan ik zelf mijn website beheren?"
      answer="Ja, het is perfect mogelijk om je eigen website volledig zelf te beheren. Wij bieden een aantal mogelijkheden aan in de mate van het beheer omdat niet elk bedrijf evenveel in eigen  beheer wilt hebben. We raden het wel af om zelf structurele aanpassingen te doen aan je website zonder kennis van html, css en javascript."
    />
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
