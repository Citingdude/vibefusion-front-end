<template>
  <div>
    <button v-on:click="editor.chain().focus().toggleBold().run()">Bold</button>
  </div>
  <editor-content :value="modelValue" :editor="editor" />
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

console.log(editor)

</script>

<!-- @input="(event) => $emit('update:modelValue', editor.getHTML())" -->