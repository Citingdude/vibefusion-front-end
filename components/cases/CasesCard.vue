<template>
  <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center mb-12">
    <img
      class="w-full rounded-tl-3xl rounded-br-3xl mb-8"
      :class="imageOrder"
      src="~/assets/images/explauradise.jpg"
      alt="Mockup van de Explauradise case"
    />

    <div class="flex flex-col px-8" :class="contentOrder">
      <CasesBadge v-if="badgeText">{{ badgeText }}</CasesBadge>

      <h3 class="font-display font-bold text-2xl lg:text-3xl text-dark-400 my-6">{{ title }}</h3>

      <p v-if="summary" class="mb-12 text-dark-300 font-body text-base md:text-lg lg:text-xl max-w-lg">
        <div v-html="summary"></div>
      </p>

      <AppButton color="transparent" :to="link">Lees de volledige case</AppButton>
    </div>
  </div>
</template>

<script setup>
defineProps({
  badgeText: {
    type: String,
    default: 'badge'
  },

  title: {
    type: String,
    default: 'Title'
  },

  summary: {
    type: String,
    default: 'Summary'
  },

  image: {
    type: String,
    default: 'Image'
  },

  link: {
    type: String,
    default: '/'
  },

  imageOrder: {
    type: String,
    default: 'order-1'
  },

  contentOrder: {
    type: String,
    default: 'order-2'
  }
})

</script>

<script>
export default {
  props: {
    badgeText: String,
    title: String,
    summary: String,
    image: String,
    buttonLink: Object,
    imageOrder: {
      type: String,
      default: 'order-1',
    },
    contentOrder: {
      type: String,
      default: 'order-2',
    }
  },
}
</script>