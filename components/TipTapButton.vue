<template>
  <button class="px-2 py-1 text-xs bg-accent-light rounded-md border-2  border-transparent hover:border-accent transition-colors" v-on:click="eventType">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  clickEvent: {
    type: String,
    default: ""
  },

  editor: {
    type: Object
  }
})

const eventType = computed(() => {
  switch (props.clickEvent) {
    case 'bold':
      return props.editor.chain().focus().toggleBold().run()

    case 'h1':
      return props.editor.chain().focus().toggleHeading({ level: 1 }).run()

    case 'h2':
      return props.editor.chain().focus().toggleHeading({ level: 2 }).run()
  }
})

</script>