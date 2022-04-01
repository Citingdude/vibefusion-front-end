<template>
  <div>
    <button v-on:click="editor.chain().focus().toggleBold().run()">Bold</button>
  </div>
  <editor-content class="border border-blue-50 rounded px-3 py-2" :value="modelValue" :editor="editor" />
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

<!-- @input="(event) => $emit('update:modelValue', editor.getHTML())" -->