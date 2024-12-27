<template>
  <div class="max-w-lg mx-auto mt-14 p-6 bg-white shadow-md rounded-md">
    <h1 class="text-2xl font-bold text-gray-800 mb-6">Edit Note 📑</h1>
    <NoteForm :note="currentNote" @save="saveNote" @cancel="cancelEdit" />
  </div>
</template>

<script setup>
import { useNoteStore } from '~/store/notes.js'
import NoteForm from '~/components/NoteForm.vue'

const noteStore = useNoteStore()
const route = useRoute()

let currentNote = route.params.id
  ? noteStore.notes.find(note => note.id === route.params.id) || {}
  : { title: '', todos: [] }

function saveNote(updatedNote) {
  if (route.params.id) {
    noteStore.updateNote(route.params.id, updatedNote)
  } else {
    noteStore.addNote({ id: Date.now().toString(), ...updatedNote })
  }
  navigateTo('/')
}

function cancelEdit() {
  if (confirm('Are you sure you want to cancel?')) {
    navigateTo('/')
  }
}
</script>