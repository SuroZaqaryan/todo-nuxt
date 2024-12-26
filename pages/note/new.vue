<template>
  <div class="max-w-lg mx-auto mt-14 p-6 bg-white shadow-md rounded-md">
    <h1 class="text-2xl font-bold text-gray-800 mb-6">Create New Note! 📚</h1>
    <NoteForm @save="createNote" @cancel="cancelCreate" />
  </div>
</template>
  
  <script setup>
  import { useNoteStore } from '../store/notes.js'
  import NoteForm from '~/components/NoteForm.vue'
  
  const noteStore = useNoteStore()
  
  function createNote(newNote) {
    noteStore.addNote({ id: Date.now().toString(), ...newNote })
    navigateTo('/')
  }
  
  function cancelCreate() {
    if (confirm('Are you sure you want to cancel?')) {
      navigateTo('/')
    }
  }
  </script>
  