<template>
  <NuxtLink
    v-if="!button && !hashlink"
    :to="props.to"
    class="btn-hover max-w-max rounded-tl-xl rounded-br-xl h-max"
    :class="getSize, getColor"
  >
    <slot />
  </NuxtLink>

  <button
    @click="$emit('click')"
    v-if="button"
    class="btn-hover max-w-max rounded-tl-xl rounded-br-xl"
    :class="getSize, getColor"
  >
    <slot />
  </button>

  <a
    v-if="hashlink"
    :href="`#${hashlink}`"
    class="btn-hover max-w-max rounded-tl-xl rounded-br-xl h-max"
    :class="getSize, getColor"
  >
    <slot />
  </a>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  button: {
    type: Boolean,
    default: false
  },

  to: {
    type: String,
    default: '/'
  },

  hashlink: {
    type: String,
    default: ''
  },

  color: {
    type: String,
    default: 'accent'
  },

  size: {
    type: String,
    default: 'medium'
  }
})

const emit = defineEmits(['click'])

const getColor = computed(() => {
  switch (props.color) {
    case 'accent':
      return 'btn-accent'
    case 'alt':
      return 'btn-alt'
    case 'transparent':
      return 'btn-transparent'
    case 'transparent-alt':
      return "btn-transparent-alt"
  }
})

const getSize = computed(() => {
  switch (props.size) {
    case 'small':
      return 'btn-sm'
    case 'medium':
      return 'btn-md'
    case 'large':
      return 'btn-lg'
  }
})


</script>