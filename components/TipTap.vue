<template>
  <div class="flex gap-2">
    <TipTapButton :editor="editor" clickEvent="bold">Bold</TipTapButton>
    <TipTapButton :editor="editor" clickEvent="h1">H1</TipTapButton>
    <TipTapButton :editor="editor" clickEvent="h2">H2</TipTapButton>
  </div>
  <editor-content
    class="border border-blue-50 rounded px-3 py-2"
    :value="modelValue"
    :editor="editor"
  />
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const updateEditor = () => {
  emit('update:modelValue', editor.value.getHTML())
}

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
  ],

  onUpdate: updateEditor
})
</script>

<style>
.ProseMirror h1 {
  @apply text-3xl;
}

.ProseMirror h2 {
  @apply text-2xl;
}
</style>